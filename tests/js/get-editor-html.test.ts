/**
 * This source file is available under the terms of the
 * Pimcore Open Core License (POCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (https://www.pimcore.com)
 *  @license    Pimcore Open Core License (POCL)
 */

// Tests for the Studio UI Quill editor's blank-line handling (PEES-2041). No dependencies, run with:
//   node --test tests/js

import test from 'node:test'
import assert from 'node:assert/strict'
import { normalizeSemanticHtml } from '../../assets/studio/js/src/modules/quill-editor/get-editor-html.ts'

// What Quill 2's getSemanticHTML() returns: an empty line (<p><br></p>) comes back as <p></p>.
const SEMANTIC_BLANK_LINES = '<p>Line 1</p><p>Line 2</p><p></p><p></p><p>Line 3</p><p>Line 4</p>'
const BLANK_LINES = '<p>Line 1</p><p>Line 2</p><p><br></p><p><br></p><p>Line 3</p><p>Line 4</p>'

test('keeps blank lines between paragraphs', () => {
  assert.equal(normalizeSemanticHtml(SEMANTIC_BLANK_LINES), BLANK_LINES)
})

test('keeps leading and trailing blank lines', () => {
  assert.equal(normalizeSemanticHtml('<p></p><p>Line 1</p><p></p>'), '<p><br></p><p>Line 1</p><p><br></p>')
})

test('reports an editor without content as empty', () => {
  assert.equal(normalizeSemanticHtml('<p></p>'), '')
  assert.equal(normalizeSemanticHtml('<p></p><p></p>'), '')
  assert.equal(normalizeSemanticHtml(''), '')
})

test('leaves other content untouched', () => {
  const html = '<h1>Title</h1><p>Some <strong>bold</strong> text</p><ul><li>one</li></ul>'

  assert.equal(normalizeSemanticHtml(html), html)
})
