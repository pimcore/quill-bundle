import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import Quill, { type QuillOptions, Range } from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
import QuillTableBetter from 'quill-table-better'
import 'quill-table-better/dist/quill-table-better.css'
import { HtmlModal } from './html-modal'
import {
  type DragAndDropInfo,
  createImageThumbnailUrl
} from '@pimcore/studio-ui-bundle/components'
import { type WysiwygEditorRef } from '@pimcore/studio-ui-bundle/modules/wysiwyg'
import { toCssDimension } from '@pimcore/studio-ui-bundle/utils'
import { useTranslation } from '@pimcore/studio-ui-bundle/app'

interface EditorProps {
  defaultValue?: string
  onSelectionChange?: (a1, a2, a3) => void
  onTextChange?: (a1) => void
  onFocusChange?: (focused: boolean) => void
  maxCharacters?: number
  editorConfig?: Record<string, any>
  placeholder?: string
  readOnly?: boolean
  ref?: React.Ref<WysiwygEditorRef>
}

const Editor = forwardRef<WysiwygEditorRef, EditorProps>(
  ({
    defaultValue = '',
    onSelectionChange,
    onTextChange,
    onFocusChange,
    maxCharacters,
    editorConfig,
    placeholder = '',
    readOnly = false
  },
  ref): React.JSX.Element => {
    const { t } = useTranslation()

    const containerRef = useRef<HTMLDivElement>(null)
    const onTextChangeRef = useRef(onTextChange)
    const onSelectionChangeRef = useRef(onSelectionChange)

    const [editor, setEditor] = useState<Quill>()
    const [openHtmlModal, setOpenHtmlModal] = useState(false)
    const [html, setHtml] = useState('')
    const [lastSelection, setLastSelection] = useState<Range>()
    const blurTimeoutRef = useRef<number | null>(null)

    useImperativeHandle(ref, (): WysiwygEditorRef => ({
      onDrop: (info: DragAndDropInfo): void => {
        if (editor !== undefined) {
          onDropWysiwyg(editor, info)
        }
      }
    }))

    initQuill()

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange
      onSelectionChangeRef.current = onSelectionChange
    })

    useEffect(() => {
      const container = containerRef.current
      const editorContainer = container!.appendChild(
        container!.ownerDocument.createElement('div')
      )

      const finalConfig = Object.assign({
        theme: 'snow',
        modules: { }
      }, editorConfig)
      setDefaultConfig(finalConfig)

      const quill = new Quill(editorContainer, finalConfig as QuillOptions)
      editorContainer.getElementsByClassName('ql-editor')[0].setAttribute('data-placeholder', placeholder)

      quill.enable(!readOnly)
      setEditor(quill)

      initializeToolbar(quill)

      setEditorContent(quill, defaultValue)

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        const tableModule = quill.getModule('table-better') as any
        tableModule?.deleteTableTemporary()
        onTextChangeRef.current?.(quill.getSemanticHTML())
        checkCharCount(quill)
      })

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args)
        setLastSelection(args[0] ?? args[1])

        const selection = args[0]
        if (selection !== null && selection !== undefined) {
          // Clear any pending blur timeout when we have a selection
          if (blurTimeoutRef.current !== null) {
            clearTimeout(blurTimeoutRef.current)
            blurTimeoutRef.current = null
          }
          onFocusChange?.(true)
        }
      })

      const editorElement = editorContainer.getElementsByClassName('ql-editor')[0] as HTMLElement

      if (editorElement !== null) {
        editorElement.addEventListener('focus', () => {
          if (blurTimeoutRef.current !== null && blurTimeoutRef.current !== undefined) {
            clearTimeout(blurTimeoutRef.current)
            blurTimeoutRef.current = null
          }
          onFocusChange?.(true)
        })

        editorElement.addEventListener('blur', () => {
          blurTimeoutRef.current = window.setTimeout(() => {
            onFocusChange?.(false)
            blurTimeoutRef.current = null
          }, 150) // 150ms delay to allow toolbar clicks
        })
      }

      const toolbarElement = editorContainer.getElementsByClassName('ql-toolbar')[0] as HTMLElement
      if (toolbarElement !== null && toolbarElement !== undefined) {
        toolbarElement.addEventListener('mousedown', () => {
          if (blurTimeoutRef.current !== null) {
            clearTimeout(blurTimeoutRef.current)
            blurTimeoutRef.current = null
          }
          onFocusChange?.(true)
        })
      }

      return () => {
        if (blurTimeoutRef.current !== null && blurTimeoutRef.current !== undefined) {
          clearTimeout(blurTimeoutRef.current)
        }
        setEditor(undefined)
        container!.innerHTML = ''
      }
    }, [containerRef])

    useEffect(() => {
      if (editor === undefined) {
        return
      }

      const tableModule = editor.getModule('table-better') as any
      tableModule?.deleteTableTemporary()
      if (defaultValue !== '<p></p>' && defaultValue !== editor.getSemanticHTML()) {
        setEditorContent(editor, defaultValue)
      }
    }, [defaultValue])

    return (
      <>
        <div
          ref={ containerRef }
        ></div>
        <HtmlModal
          html={ html }
          open={ openHtmlModal }
          save={ (code) => { if (editor !== undefined) { setEditorContent(editor, code) } } }
          setOpen={ setOpenHtmlModal }
        />
      </>
    )

    function initQuill (): void {
      Quill.register({
        'modules/table-better': QuillTableBetter
      }, true)

      const Parchment = Quill.import('parchment')

      Quill.register({
        'modules/table-better': QuillTableBetter
      }, true)

      const pimcoreIdAttributor = new Parchment.Attributor('pimcore_id', 'pimcore_id', {
        scope: Parchment.Scope.INLINE
      })
      Quill.register(pimcoreIdAttributor)

      const pimcoreTypeAttributor = new Parchment.Attributor('pimcore_type', 'pimcore_type', {
        scope: Parchment.Scope.INLINE
      })
      Quill.register(pimcoreTypeAttributor)

      const pimcoreThumbnailAttributor = new Parchment.Attributor('pimcore_disable_thumbnail', 'pimcore_disable_thumbnail', {
        scope: Parchment.Scope.INLINE
      })
      Quill.register(pimcoreThumbnailAttributor)

      const cssClassAttributor = new Parchment.Attributor('class', 'class', {
        scope: Parchment.Scope.ANY
      })
      Quill.register(cssClassAttributor, true)

      const cssIdAttributor = new Parchment.Attributor('id', 'id', {
        scope: Parchment.Scope.ANY
      })
      Quill.register(cssIdAttributor, true)

      const inlineCssAttributor = new Parchment.Attributor('style', 'style', {
        scope: Parchment.Scope.ANY
      })
      Quill.register(inlineCssAttributor, true)
    }

    function initializeToolbar (quill: Quill): void {
      createToolbarBtn(
        'undo',
        () => { quill.history.undo() }
      )
      createToolbarBtn(
        'redo',
        () => { quill.history.redo() }
      )
      createToolbarBtn(
        'html-edit',
        () => {
          const tableModule = quill.getModule('table-better') as any
          tableModule?.deleteTableTemporary()
          setHtml(quill.getSemanticHTML())
          setOpenHtmlModal(true)
        }
      )
    }

    function setEditorContent (quill: Quill, html: string): void {
      quill.deleteText(0, quill.getLength())
      const delta = quill.clipboard.convert({
        html,
        text: '\n'
      })
      quill.updateContents(delta, Quill.sources.USER)
      quill.history.clear()
      checkCharCount(quill)
    }

    function createToolbarBtn (className, onClick, innerHTML = ''): void {
      const toolbarBtns = document.getElementsByClassName('ql-' + className)
      if (toolbarBtns.length === 0) {
        return
      }
      for (const toolbarBtn of toolbarBtns) {
        toolbarBtn.innerHTML = innerHTML
        toolbarBtn.addEventListener('click', function (e) {
          e.preventDefault()
          onClick(e)
        })
      }
    }

    function checkCharCount (quill: Quill): void {
      quill.root.style.border = ''
      quill.root.setAttribute('title', '')
      const charCount = quill.getLength()
      if (typeof maxCharacters === 'number' && maxCharacters !== 0 && charCount > maxCharacters) {
        quill.root.style.border = '1px solid red'
        quill.root.setAttribute('title', t('maximum_length_is') + ' ' + maxCharacters)
      }
    }

    function setDefaultConfig (config: any): any {
      const modules = config.modules
      if (modules.table === undefined) {
        modules.table = false
      }

      if (modules['table-better'] === undefined) {
        modules['table-better'] = {
          language: 'en_US',
          menus: ['column', 'row', 'merge', 'table', 'cell', 'wrap', 'delete'],
          toolbarTable: true
        }
      }

      if (modules.keyboard === undefined) {
        modules.keyboard = {
          bindings: QuillTableBetter.keyboardBindings
        }
      }

      if (modules.toolbar === undefined) {
        modules.toolbar = {
          container: [
            ['undo', 'redo'],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic'],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            ['blockquote'],
            ['link', 'table-better'],
            ['clean', 'html-edit']
          ]
        }
      }

      if (modules.history === undefined) {
        modules.history = {
          delay: 700,
          maxStack: 200,
          userOnly: true
        }
      }

      return config
    }

    function onDropWysiwyg (quill: Quill, info: DragAndDropInfo): void {
      const data = info.data

      let textIsSelected = false

      let retval = lastSelection
      if (retval === undefined) {
        retval = new Range(0, 0)
      }

      if (retval.length > 0) {
        textIsSelected = true
      }

      const id = data.id
      let uri = data.fullPath
      const browserPossibleExtensions = ['jpg', 'jpeg', 'gif', 'png']

      if (info.type === 'asset') {
        if (data.type === 'image' && !textIsSelected) {
          // images bigger than 600px or formats which cannot be displayed by the browser directly will be
          // converted by the pimcore thumbnailing service so that they can be displayed in the editor
          const defaultWidth = 600
          const additionalAttributes: Record<string, unknown> = {
            width: `${defaultWidth}px`,
            alt: 'asset_image',
            pimcore_id: id,
            pimcore_type: 'asset'
          }

          if (typeof data.width !== 'undefined') {
            uri = createImageThumbnailUrl(id as number, {
              width: defaultWidth,
              mimeType: 'JPEG'
            })

            if (data.width < defaultWidth &&
                browserPossibleExtensions.includes(getFileExtension(data.fullPath as string))) {
              uri = data.fullPath
              additionalAttributes.pimcore_disable_thumbnail = true
            }

            if (data.width < defaultWidth) {
              additionalAttributes.width = toCssDimension(data.width as number)
            }
          }

          quill.insertEmbed(retval.index, 'image', uri, 'user')
          quill.formatText(retval.index, 1, additionalAttributes)

          return
        } else {
          quill.format('link', uri)
          quill.format('pimcore_id', id)
          quill.format('pimcore_type', 'asset')
          return
        }
      }

      quill.format('link', uri)
      quill.format('pimcore_id', id)
      if (data.elementType === 'document' && (data.type === 'page' ||
          data.type === 'hardlink' || data.type === 'link')) {
        quill.format('pimcore_type', 'document')
        return
      }

      if (data.elementType === 'object') {
        quill.format('pimcore_type', 'object')
      }
    }

    function getFileExtension (filename: string): string {
      const extensionP = filename.split('.')
      return extensionP[extensionP.length - 1]
    }
  }
)

Editor.displayName = 'Editor'

export default Editor
