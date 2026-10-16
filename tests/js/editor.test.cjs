/**
 * This source file is available under the terms of the
 * Pimcore Open Core License (POCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.com)
 *  @license    Pimcore Open Core License (POCL)
 */

// Tests for public/js/editor.js (classic admin integration). No dependencies, run with:
//   node --test tests/js

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const EVENTS = {
    initializeWysiwyg: 'initializeWysiwyg',
    createWysiwyg: 'createWysiwyg',
    createWysiwygConfig: 'createWysiwygConfig',
    onDropWysiwyg: 'onDropWysiwyg',
    beforeDestroyWysiwyg: 'beforeDestroyWysiwyg',
    changeWysiwyg: 'changeWysiwyg',
};

// What the bundled Quill 2 returns from getSemanticHTML(): an empty line (<p><br></p>) comes back as <p></p>.
const SEMANTIC_BLANK_LINES = '<p>Line 1</p><p>Line 2</p><p></p><p></p><p>Line 3</p><p>Line 4</p>';
const BLANK_LINES = '<p>Line 1</p><p>Line 2</p><p><br></p><p><br></p><p>Line 3</p><p>Line 4</p>';

function createFakeQuill(semanticHtml) {
    return class FakeQuill {
        static sources = { USER: 'user' };

        constructor() {
            this.handlers = {};
            this.semanticHtml = semanticHtml;
            this.root = { style: {}, setAttribute() {} };
            this.container = { firstChild: {} };
            this.clipboard = { convert: () => ({}) };
            this.history = { clear() {} };
        }

        on(name, handler) { this.handlers[name] = handler; }
        getModule(name) {
            return name === 'toolbar' ? { container: { hidden: false } } : null;
        }
        getSemanticHTML() { return this.semanticHtml; }
        getLength() { return 1; }
        deleteText() {}
        updateContents() {}
    };
}

function loadEditor(FakeQuill) {
    const dispatched = [];
    const namespaces = {};
    const context = {
        console,
        CustomEvent: class { constructor(type, init) { this.type = type; this.detail = init?.detail; } },
        t: (key) => key,
        Quill: FakeQuill,
        QuillTableBetter: { keyboardBindings: {} },
        document: {
            addEventListener() {},
            dispatchEvent: (event) => { dispatched.push(event); },
            getElementById: () => ({ innerHTML: '', removeAttribute() {} }),
            getElementsByClassName: () => [],
        },
        Class: {
            create(prototype) {
                return function (...args) {
                    Object.assign(this, prototype);
                    this.initialize?.(...args);
                };
            },
        },
        pimcore: {
            events: EVENTS,
            object: { tags: {} },
            registerNS(namespace) {
                let node = namespaces;
                for (const part of namespace.split('.').slice(1)) {
                    node = node[part] ??= {};
                }
                context.pimcore.bundle = namespaces.bundle;
            },
        },
    };
    context.parent = { pimcore: { events: EVENTS } };
    context.pimcore.registerNS = context.pimcore.registerNS.bind(context.pimcore);

    const file = path.join(__dirname, '..', '..', 'public', 'js', 'editor.js');
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });

    return { editor: new context.pimcore.bundle.quill.editor(), dispatched };
}

function textChange(semanticHtml) {
    const FakeQuill = createFakeQuill(semanticHtml);
    const { editor, dispatched } = loadEditor(FakeQuill);

    editor.config = {};
    editor.createWysiwyg({ detail: { textarea: { id: 'editor-1' }, context: 'object' } });
    editor.activeEditor.handlers['text-change']();

    const changes = dispatched.filter((event) => event.type === EVENTS.changeWysiwyg);
    assert.equal(changes.length, 1);

    return changes[0].detail.data;
}

test('text change keeps blank lines between paragraphs', () => {
    assert.equal(textChange(SEMANTIC_BLANK_LINES), BLANK_LINES);
});

test('text change keeps leading and trailing blank lines', () => {
    assert.equal(textChange('<p></p><p>Line 1</p><p></p>'), '<p><br></p><p>Line 1</p><p><br></p>');
});

test('text change reports an editor without content as empty', () => {
    assert.equal(textChange('<p></p>'), '');
    assert.equal(textChange('<p></p><p></p>'), '');
    assert.equal(textChange(''), '');
});

test('text change leaves other content untouched', () => {
    const html = '<h1>Title</h1><p>Some <strong>bold</strong> text</p><ul><li>one</li></ul>';

    assert.equal(textChange(html), html);
});

test('html edit view shows blank lines the same way they are saved', () => {
    const { editor } = loadEditor(createFakeQuill(SEMANTIC_BLANK_LINES));
    const textarea = { value: '' };
    editor.modalBackground = { style: {}, getElementsByTagName: () => [textarea] };
    editor.activeEditor = new (createFakeQuill(SEMANTIC_BLANK_LINES))();

    editor.openHtmlEdit();

    assert.equal(textarea.value, BLANK_LINES);
});
