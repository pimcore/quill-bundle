/**
* This source file is available under the terms of the
* Pimcore Open Core License (POCL)
* Full copyright and license information is available in
* LICENSE.md which is distributed with this source code.
*
*  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.com)
*  @license    Pimcore Open Core License (POCL)
*/

import { createStyles } from 'antd-style'

export const useStyles = createStyles(({ css, token }) => {
  return {
    editor: css`
      overflow: auto;
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;
      min-height: 100px;
      min-width: 200px;
      background-color: ${token.colorBgContainer};
      cursor: text;

      div[contenteditable='false'] {
        background-color: ${token.colorBgContainerDisabled};
        cursor: not-allowed;
      }
      
      .ql-toolbar {
        border: none;
        border-bottom: 1px solid ${token.colorBorder};
      }
      
      .ql-container {
        border: none;
      }

      .ql-toolbar .ql-formats :is(button.ql-undo,button.ql-redo,  button.ql-html-edit) {
        background-repeat: no-repeat;
        background-position: center;
        background-size: 18px;
      }
      
      .ql-toolbar .ql-undo {
        background-image: url(/bundles/pimcorequill/css/icons/arrow-counterclockwise.svg);
      }

      .ql-toolbar .ql-redo {
        background-image: url(/bundles/pimcorequill/css/icons/arrow-clockwise.svg);
      }

      .ql-toolbar .ql-html-edit {
        background-image: url(/bundles/pimcorequill/css/icons/code.svg);
      }

      .ql-operate-block + .ql-table-properties-form {
        z-index: 9999;
      }
    `
  }
})
