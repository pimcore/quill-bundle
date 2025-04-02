import React, { forwardRef, type MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Quill, { type QuillOptions } from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'
import QuillTableBetter from 'quill-table-better'
import 'quill-table-better/dist/quill-table-better.css'
import { HtmlModal } from './html-modal'

interface EditorProps {
  defaultValue?: string
  onSelectionChange?: (a1, a2, a3) => void
  onTextChange?: (a1) => void
  maxCharacters?: number
  editorConfig?: Record<string, any>
  readOnly?: boolean
}

const Editor = forwardRef(
  ({
    defaultValue = '',
    onSelectionChange,
    onTextChange,
    maxCharacters,
    editorConfig,
    readOnly = false
  }: EditorProps,
  ref: MutableRefObject<unknown>) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const onTextChangeRef = useRef(onTextChange)
    const onSelectionChangeRef = useRef(onSelectionChange)

    const [editor, setEditor] = useState<Quill>()
    const [openHtmlModal, setOpenHtmlModal] = useState(false)
    const [html, setHtml] = useState('')

    initQuill()

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange
      onSelectionChangeRef.current = onSelectionChange
    })

    useEffect(() => {
      editor?.enable(!readOnly)
    }, [ref, readOnly])

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

      quill.enable(!readOnly)
      setEditor(quill)

      initializeToolbar(quill)

      ref.current = quill

      setEditorContent(quill, defaultValue)

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        const tableModule = quill.getModule('table-better') as any
        tableModule?.deleteTableTemporary()
        onTextChangeRef.current?.(quill.getSemanticHTML())
        checkCharCount(quill)
      })

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args)
      })

      return () => {
        ref.current = null
        container!.innerHTML = ''
      }
    }, [ref])

    return (
      <>
        <div ref={ containerRef }></div>
        <HtmlModal
          html={ html }
          open={ openHtmlModal }
          save={ (code) => { setEditorContent(editor!, code) } }
          setOpen={ setOpenHtmlModal }
        />
      </>
    )

    function initQuill (): void {
      Quill.register({
        'modules/table-better': QuillTableBetter
      }, true)
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
      if (maxCharacters !== undefined && maxCharacters !== 0 && charCount > maxCharacters) {
        quill.root.style.border = '1px solid red'
        // TODO: translate
        quill.root.setAttribute('title', ('maximum_length_is') + ' ' + maxCharacters)
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
  }
)

Editor.displayName = 'Editor'

export default Editor
