/**
 * This source file is available under the terms of the
 * Pimcore Open Core License (POCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (https://www.pimcore.com)
 *  @license    Pimcore Open Core License (POCL)
 */

// quill.getSemanticHTML() renders an empty line (<p><br></p>) as <p></p>, which is not displayed at all.
// This restores the <br> so blank lines stay visible, mirroring the fix for the classic admin
// integration in public/js/editor.js.
export function normalizeSemanticHtml (semanticHtml: string): string {
  // an editor without content only consists of empty paragraphs
  if (/^(?:<p>\s*<\/p>)*$/.test(semanticHtml)) {
    return ''
  }

  return semanticHtml.replace(/<p>\s*<\/p>/g, '<p><br></p>')
}
