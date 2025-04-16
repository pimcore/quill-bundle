/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - Pimcore Open Core License (POCL)
 * - Pimcore Commercial License (PCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    https://github.com/pimcore/studio-ui-bundle/blob/1.x/LICENSE.md POCL and PCL
 */

import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { type WysiwygEditorRef, type WysiwygProps } from '@pimcore/studio-ui-bundle/modules/wysiwyg'
import { useStyles } from './quill-editor.styles'
import { isNull } from 'lodash'
import Editor from './editor'
import { toCssDimension } from '@pimcore/studio-ui-bundle/utils'
import { type DragAndDropInfo } from '@pimcore/studio-ui-bundle/components'

export const QuillEditor = forwardRef<WysiwygEditorRef, WysiwygProps>(({
  value,
  onChange,
  disabled,
  width,
  height,
  maxCharacters,
  placeholder,
  editorConfig
}, ref): React.JSX.Element => {
  const editorRef = useRef<WysiwygEditorRef>(null)
  const { styles } = useStyles()
  const timeoutRef = useRef(setTimeout(() => {}))

  useImperativeHandle(ref, (): WysiwygEditorRef => ({
    onDrop: (info: DragAndDropInfo): void => {
      if (!isNull(editorRef.current)) {
        editorRef.current.onDrop(info)
      }
    }
  }))

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleInput = (editorHtml: string): void => {
    startTimeout(editorHtml)
  }

  return (
    <div
      className={ styles.editor }
      style={ { maxWidth: toCssDimension(width), maxHeight: toCssDimension(height) } }
    >
      <Editor
        defaultValue={ value ?? '' }
        editorConfig={ editorConfig }
        maxCharacters={ maxCharacters }
        onTextChange={ handleInput }
        placeholder={ placeholder }
        readOnly={ disabled }
        ref={ editorRef }
      />
    </div>
  )

  function startTimeout (content: string): void {
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      if (onChange !== undefined && onChange !== null) {
        onChange(content)
      }
    }, 700)
  }
})

QuillEditor.displayName = 'QuillEditor'
export default QuillEditor
