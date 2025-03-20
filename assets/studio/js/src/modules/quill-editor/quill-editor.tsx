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

import React, { useEffect, useRef } from 'react'
import { type WysiwygProps } from '@pimcore/studio-ui-bundle/modules/wysiwyg'
import { isNull } from 'lodash'
import { useStyles } from './quill-editor.styles'

export const QuillEditor = ({ value, onChange, disabled }: WysiwygProps): React.JSX.Element => {
  const editorRef = useRef<HTMLDivElement>(null)
  const { styles } = useStyles()

  useEffect(() => {
    if (!isNull(editorRef.current) && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value ?? ''
    }
  }, [value])

  const handleInput = (event: React.FormEvent<HTMLDivElement>): void => {
    if (onChange !== undefined && onChange !== null) {
      onChange(event.currentTarget.innerHTML)
    }
  }

  return (
    <div>
      <h1>I am the dummy quill editor from the quill bundle</h1>
      <div
        className={ styles.editor }
        contentEditable={ disabled !== true }
        onInput={ handleInput }
        ref={ editorRef }
      >

      </div>
    </div>
  )
}

export default QuillEditor
