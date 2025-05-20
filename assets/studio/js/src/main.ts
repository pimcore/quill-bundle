import { Pimcore } from '@pimcore/studio-ui-bundle'
import { QuillEditorModule } from './modules/quill-editor'

if (module.hot !== undefined) {
  module.hot.accept()
}

Pimcore.pluginSystem.registerPlugin({
  name: 'pimcore-quill-plugin',

  // Register and overwrite services here
  onInit: ({ container }): void => {

  },

  // register modules here
  onStartup: ({ moduleSystem }): void => {
    moduleSystem.registerModule(QuillEditorModule)
    console.log('Hello from quill.')
  }
})
