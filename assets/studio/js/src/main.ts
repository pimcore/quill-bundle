import { Pimcore } from '@pimcore/studio-ui-bundle'
// import { serviceIds } from '@pimcore/studio-ui-bundle/app'
import QuillEditor from './quill-editor/quill-editor'

if (module.hot !== undefined) {
  module.hot.accept()
}

Pimcore.pluginSystem.registerPlugin({
  name: 'pimcore-quill-plugin',

  // Register and overwrite services here
  onInit: ({ container }): void => {
    container.rebind('wysiwyg').toConstantValue(QuillEditor)
    console.log('hello from quill.')
  },

  // register modules here
  onStartup: ({ moduleSystem }): void => {
    moduleSystem.registerModule(QuillEditorModule)
    console.log('hello from quill.')
  }
})
