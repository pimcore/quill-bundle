/**
* This source file is available under the terms of the
* Pimcore Open Core License (POCL)
* Full copyright and license information is available in
* LICENSE.md which is distributed with this source code.
*
*  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.com)
*  @license    Pimcore Open Core License (POCL)
*/

pimcore.registerNS("pimcore.bundle.quill.editor");
pimcore.bundle.quill.editor = Class.create({
    maxChars: -1,
    activeEditor: null,
    quills: new Map(),

    initialize: function () {
        if(!parent.pimcore.wysiwyg) {
            parent.pimcore.wysiwyg = {};
            parent.pimcore.wysiwyg.editors = [];
        }
        parent.pimcore.wysiwyg.editors.push('quill');
        document.addEventListener(parent.pimcore.events.initializeWysiwyg, this.initializeWysiwyg.bind(this));
        document.addEventListener(parent.pimcore.events.createWysiwyg, this.createWysiwyg.bind(this));
        document.addEventListener(parent.pimcore.events.onDropWysiwyg, this.onDropWysiwyg.bind(this));
        document.addEventListener(parent.pimcore.events.beforeDestroyWysiwyg, this.beforeDestroyWysiwyg.bind(this));
    },

    initializeWysiwyg: function (e) {
        if (e.detail.context === 'object') {
            if (!isNaN(e.detail.config.maxCharacters) && e.detail.config.maxCharacters > 0) {
                this.maxChars = e.detail.config.maxCharacters;
            } else {
                this.maxChars = -1;
            }
        }

        this.config = e.detail.config;

        if(this.config.toolbarConfig) {
            const elementCustomConfig = JSON.parse(this.config.toolbarConfig);
            this.config = mergeObject(this.config, elementCustomConfig);
        }

        const Parchment = Quill.import('parchment');

        Quill.register({
            'modules/table-better': QuillTableBetter,
        }, true);

        const pimcoreIdAttributor = new Parchment.Attributor('pimcore_id', 'pimcore_id', {
            scope: Parchment.Scope.INLINE
        });
        Quill.register(pimcoreIdAttributor);

        const pimcoreTypeAttributor = new Parchment.Attributor('pimcore_type', 'pimcore_type', {
            scope: Parchment.Scope.INLINE
        });
        Quill.register(pimcoreTypeAttributor);

        const pimcoreThumbnailAttributor = new Parchment.Attributor('pimcore_disable_thumbnail', 'pimcore_disable_thumbnail', {
            scope: Parchment.Scope.INLINE
        });
        Quill.register(pimcoreThumbnailAttributor);

        const cssClassAttributor = new Parchment.Attributor('class', 'class', {
            scope: Parchment.Scope.ANY
        });
        Quill.register(cssClassAttributor, true);

        const cssIdAttributor = new Parchment.Attributor('id', 'id', {
            scope: Parchment.Scope.ANY
        });
        Quill.register(cssIdAttributor, true);

        const inlineCssAttributor = new Parchment.Attributor('style', 'style', {
            scope: Parchment.Scope.ANY
        });
        Quill.register(inlineCssAttributor, true);

        this.createHtmlEditModal();
    },

    createWysiwyg: function (e) {
        const textareaId = e.detail.textarea.id ?? e.detail.textarea;
        document.getElementById(textareaId).removeAttribute('contenteditable');

        let subSpace = '';
        if (e.detail.context === 'document') {
            subSpace = 'editables';
        } else if (e.detail.context === 'object') {
            subSpace = 'tags';
        }

        let defaultConfig = {};
        if('' !== subSpace && pimcore[e.detail.context][subSpace]) {
            defaultConfig = pimcore[e.detail.context][subSpace].wysiwyg ? pimcore[e.detail.context][subSpace].wysiwyg.defaultEditorConfig : {};
        }

        const finalConfig = Object.assign({
            theme: 'snow',
            modules: { }
        }, defaultConfig, this.config);

        document.dispatchEvent(new CustomEvent(pimcore.events.createWysiwygConfig, {
            detail: {
                data: finalConfig,
                context: e.detail.context
            }
        }));

        this.setDefaultConfig(finalConfig);

        //Workaround: https://github.com/attoae/quill-table-better/issues/12#issuecomment-2347920271
        const textareaElement = document.getElementById(textareaId);
        const html = textareaElement.innerHTML;
        textareaElement.innerHTML = '';

        this.activeEditor = new Quill(`#${textareaId}`, finalConfig);
        this.quills.set(textareaId, this.activeEditor);

        this.setEditorContent(html);

        this.initializeToolbar();

        this.activeEditor.on('text-change', () => {
            const tableModule = this.activeEditor.getModule('table-better');
            tableModule?.deleteTableTemporary();
            const data = this.activeEditor.getSemanticHTML().replace(/<p>\s*<\/p>/g, '');
            document.dispatchEvent(new CustomEvent(pimcore.events.changeWysiwyg, {
                detail: {
                    e: {target:{id: textareaId}},
                    data: data,
                    context: e.detail.context
                }
            }));
            checkCharCount();
        });

        this.activeEditor.container.firstChild.onfocus = () => {
            this.activeEditor = this.quills.get(textareaId);
            this.showOnlyActiveToolbar();
        };

        const maxChars = this.maxChars;
        const checkCharCount = () => {
            this.activeEditor.root.style.border = '';
            this.activeEditor.root.setAttribute('title', '');

            const charCount = this.activeEditor.getLength();

            if (maxChars !== -1 && charCount > maxChars) {
                this.activeEditor.root.style.border = '1px solid red';
                this.activeEditor.root.setAttribute('title', t('maximum_length_is') + ' ' + maxChars);
            }
        };
        checkCharCount();
    },

    onDropWysiwyg: function (e) {
        this.activeEditor = this.quills.get(e.detail.textareaId);
        this.showOnlyActiveToolbar();

        let data = e.detail.data;

        const record = data.records[0];
        data = record.data;

        let textIsSelected = false;

        let retval = this.activeEditor.getSelection();
        if (!retval) {
            this.activeEditor.setSelection(0);
            retval = this.activeEditor.getSelection();
        }

        if (retval.length > 0) {
            textIsSelected = true;
        }

        const id = data.id;
        let uri = data.path;
        const browserPossibleExtensions = ["jpg", "jpeg", "gif", "png"];

        if (data.elementType === "asset") {
            if (data.type === "image" && textIsSelected === false) {
                if(this.activeEditor.options.formats && !this.activeEditor.options.formats.includes('image')) {
                    return;
                }

                // images bigger than 600px or formats which cannot be displayed by the browser directly will be
                // converted by the pimcore thumbnailing service so that they can be displayed in the editor
                let defaultWidth = 600;
                const additionalAttributes = {
                    width: `${defaultWidth}px`,
                    alt: 'asset_image',
                    pimcore_id: id,
                    pimcore_type: 'asset'
                };

                if (typeof data.imageWidth != "undefined") {
                    const route = 'pimcore_admin_asset_getimagethumbnail';
                    const params = {
                        id: id,
                        width: defaultWidth,
                        aspectratio: true
                    };

                    uri = Routing.generate(route, params);

                    if (data.imageWidth < defaultWidth
                      && in_arrayi(pimcore.helpers.getFileExtension(data.text),
                        browserPossibleExtensions)) {
                        uri = data.path;
                        additionalAttributes.pimcore_disable_thumbnail = true;
                    }

                    if (data.imageWidth < defaultWidth) {
                        additionalAttributes.width = data.imageWidth;
                    }

                }

                this.activeEditor.insertEmbed(retval.index, 'image', uri, 'user');
                this.activeEditor.formatText(retval.index, 1, additionalAttributes);

                return true;
            } else {
                this.activeEditor.format('link', uri);
                const [leaf, offset] = this.activeEditor.getLeaf(retval.index + 1);
                if (leaf && leaf.parent.domNode.nodeName === 'A') {
                    leaf.parent.domNode.setAttribute('pimcore_id', id);
                    leaf.parent.domNode.setAttribute('pimcore_type', 'asset');
                    return true;
                }
            }
        }

        this.activeEditor.format('link', uri);
        const [leaf, offset] = this.activeEditor.getLeaf(retval.index + 1);
        if (leaf && leaf.parent.domNode.nodeName === 'A') {
            leaf.parent.domNode.setAttribute('pimcore_id', id);
            if (data.elementType === "document" && (data.type === "page"
              || data.type === "hardlink" || data.type === "link")) {
                leaf.parent.domNode.setAttribute('pimcore_type', 'document');
                return true;
            }
            if (data.elementType === "object") {
                leaf.parent.domNode.setAttribute('pimcore_type', 'object');
                return true;
            }
        }
    },

    beforeDestroyWysiwyg: function (e) {

    },

    setDefaultConfig: function (config) {
        const modules = config.modules
        if (!modules.hasOwnProperty('table')) {
            modules.table = false;
        }

        if (!modules.hasOwnProperty('table-better')) {
            modules['table-better'] = {
                language: 'en_US',
                menus: ['column', 'row', 'merge', 'table', 'cell', 'wrap', 'delete'],
                toolbarTable: true
            };
        }

        if(!modules.hasOwnProperty('keyboard')) {
            modules.keyboard = {
                bindings: QuillTableBetter.keyboardBindings
            };
        }

        if(!modules.hasOwnProperty('toolbar')) {
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
                    [ 'clean', 'html-edit'],
                ]
            };
        }

        if(!modules.hasOwnProperty('history')) {
            modules.history = {
                delay: 700,
                maxStack: 200,
                userOnly: true
            };
        }

        return config;
    },

    initializeToolbar: function () {
        this.createToolbarBtn(
            'undo',
            () => {this.activeEditor.history.undo()},
        );
        this.createToolbarBtn(
            'redo',
            () => {this.activeEditor.history.redo()},
        );
        this.createToolbarBtn(
            'html-edit',
            this.openHtmlEdit.bind(this)
        );

        this.setHiddenForToolbar(this.activeEditor, true);
    },

    createToolbarBtn: function (className, onClick, innerHTML = '') {
        const toolbarBtns = document.getElementsByClassName('ql-' + className);
        if (!toolbarBtns) {
            return;
        }
        for (let toolbarBtn of toolbarBtns) {
            toolbarBtn.innerHTML = innerHTML;
            toolbarBtn.onclick = function (e) {
                e.preventDefault();
                onClick(e);
            };
        }
    },

    showOnlyActiveToolbar: function () {
        this.quills.forEach ((editor) => {
            this.setHiddenForToolbar(editor, editor !== this.activeEditor);
        });
    },

    setHiddenForToolbar: function(editor, hidden) {
        const toolbar = editor.getModule("toolbar").container;
        toolbar.hidden = hidden;
    },

    createHtmlEditModal: function() {
        const rootNode = document.body;

        this.modalBackground = document.createElement('div');
        this.modalBackground.setAttribute('class', 'modal__bg');

        const modal = document.createElement('div');
        modal.setAttribute('class', 'modal__inner');

        const contentNode = document.createElement("div");

        const [header, closeBtn] = this.createModalHeader(this.modalBackground, t('HTML Edit'));
        contentNode.appendChild(header);
        contentNode.appendChild(closeBtn);

        const textarea = document.createElement('textarea');
        textarea.setAttribute('class', 'modal__inner-textarea');
        contentNode.appendChild(textarea);

        modal.appendChild(contentNode);
        this.modalBackground.appendChild(modal);
        rootNode.appendChild(this.modalBackground);

        document.addEventListener('click', (event) => {
              if (event.target === this.modalBackground) {
                  this.modalBackground.style.display = "none";
              }
        });

        contentNode.appendChild(
          this.createActionButtons(
            this.modalBackground,
            () => {
                const html = this.modalBackground.getElementsByTagName('textarea')[0].value;
                this.setEditorContent(html);
            }
          )
        );

        return this.modalBackground;
    },

    createModalHeader: function (modal, text)  {
        const header = document.createElement("span");
        header.innerHTML = text;

        const closeBtn = document.createElement("button");
        closeBtn.setAttribute('class', 'modal__close-btn');
        closeBtn.onclick = () => modal.style.display = "none";

        return [header, closeBtn];
    },

    createActionButtons: function (modal, onClickSave) {
        const container = document.createElement("div");
        container.setAttribute('class', 'modal__container-actions');
        const cancelBtn = document.createElement("button");
        cancelBtn.setAttribute('class', 'actions__cancel-btn');
        cancelBtn.innerHTML = t('cancel');
        cancelBtn.onclick = () => modal.style.display = "none";
        const saveBtn = document.createElement("button");
        saveBtn.setAttribute('class', 'actions__save-btn');
        saveBtn.innerHTML = t('save');
        saveBtn.onclick = () => {
            onClickSave();
            modal.style.display = "none"
        }
        container.appendChild(cancelBtn);
        container.appendChild(saveBtn);
        return container;
    },

    openHtmlEdit: function() {
        this.modalBackground.style.display = "block";
        const textarea = this.modalBackground.getElementsByTagName('textarea')[0];
        const tableModule = this.activeEditor.getModule('table-better');
        tableModule?.deleteTableTemporary();
        textarea.value = this.activeEditor.getSemanticHTML();
    },

    setEditorContent: function (html) {
        this.activeEditor.deleteText(0, this.activeEditor.getLength());
        const delta = this.activeEditor.clipboard.convert({
            html,
            text: '\n'
        });
        this.activeEditor.updateContents(delta, Quill.sources.USER);
        this.activeEditor.history.clear();
    }
})

new pimcore.bundle.quill.editor();