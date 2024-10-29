pimcore.registerNS("pimcore.bundle.quill.editor");
pimcore.bundle.quill.editor = Class.create({
    maxChars: -1,

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

    },

    createWysiwyg: function (e) {
        this.textareaId = e.detail.textarea.id ?? e.detail.textarea;

        const finalConfig = {
            theme: 'snow'
        };

        document.dispatchEvent(new CustomEvent(pimcore.events.createWysiwygConfig, {
            detail: {
                data: finalConfig,
                context: e.detail.context
            }
        }));

        const quill = new Quill(`#${this.textareaId}`, finalConfig);
    },

    onDropWysiwyg: function (e) {

    },

    beforeDestroyWysiwyg: function (e) {

    }
})

new pimcore.bundle.quill.editor();