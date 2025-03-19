import { Pimcore } from '@pimcore/studio-ui-bundle'

if (module.hot !== undefined) {
  module.hot.accept()
}

Pimcore.pluginSystem.registerPlugin({
  name: 'pimcore-quill-plugin',

  // Register and overwrite services here
  onInit: ({ container }): void => {
    console.log('Hello from the quill bundle plugin.')
  },

  // register modules here
  onStartup: ({ moduleSystem }): void => {

  }
})
