# Quill WYSIWYG Pimcore Bundle
This bundle provides the [Quill 2.x](https://quilljs.com/) WYSIWYG editor integration for Pimcore. 
This includes the WYSIWYG for Documents, Data Objects and Shared Translations. 

## Installation
See [Installation](./doc/00_Installation.md)

## Migration to Quill
See [Migration](./doc/01_Migration_to_Quill.md)

## Configuration

Available configuration options can be found here: [config options](https://quilljs.com/docs/configuration/)

### Themes

Available themes and how to configure it can be found here: [themes](https://quilljs.com/docs/customization/themes)

## Examples

### Basic usage

`wysiwyg` helper doesn't require any additional configuration options.
The following code customize the toolbar.

```twig
<section id="marked-content">
    {{  pimcore_wysiwyg("specialContent", {
            modules: {
                toolbar: {
                    container: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }]
                    ]
                } 
            }
        })
    }}
</section>
```

### Custom configuration for Quill

A list of configuration options you can find in the [Quill toolbar documentation](https://quilljs.com/docs/modules/toolbar).

The WYSIWYG editable allows us to specify the toolbar.
If you have to limit styling options (for example only basic styles like `<b>` tag and lists would be allowed), just use `toolbar` option.

```twig
<section id="marked-content">
    {{  pimcore_wysiwyg("specialContent", {
            modules: {
                toolbar: {
                    container: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }]
                    ]
                } 
            }
        })
    }}
</section>
```

Now the user can use only the limited toolbar.

##### Global Configuration

You can add a Global Configuration for all WYSIWYG Editors for all documents by setting `pimcore.document.editables.wysiwyg.defaultEditorConfig`.
You can add a Global Configuration for all WYSIWYG Editors for all data objects by setting `pimcore.object.tags.wysiwyg.defaultEditorConfig`.

For this purpose, you can create a [Pimcore Bundle](https://pimcore.com/docs/pimcore/current/Development_Documentation/Extending_Pimcore/Bundle_Developers_Guide/index.html) and add the
configuration in a file in the `Resources/public` directory  of your bundle (e.g. `Resources/public/js/editmode.js`).

```
pimcore.document.editables.wysiwyg = pimcore.document.editables.wysiwyg || {};
pimcore.document.editables.wysiwyg.defaultEditorConfig = { menubar: true };
```
This will show you the default menubar from Quill in all document editables.

For the data object settings, you should put them in the `startup.js` in your bundle.
```
pimcore.registerNS("pimcore.plugin.YourQuillEditorConfigBundle");

pimcore.plugin.YourQuillEditorConfigBundle = Class.create({

    initialize: function () {
        document.addEventListener(pimcore.events.pimcoreReady, this.pimcoreReady.bind(this));
    },

    pimcoreReady: function (e) {
        pimcore.object.tags.wysiwyg = pimcore.object.tags.wysiwyg || {};
        pimcore.object.tags.wysiwyg.defaultEditorConfig = { menubar: true };
    }
});

const YourQuillEditorConfigBundlePlugin = new pimcore.plugin.YourQuillEditorConfigBundle();    
```



To load the `editmode.js` file in editmode, you need to implement `getEditmodeJsPaths` in your bundle class. Given your bundle is named
`AppAdminBundle` and your `editmode.js` and `startup.js` created before was saved to `src/AppAdminBundle/public/js/editmode.js` and `src/AppAdminBundle/public/js/startup.js`:

```php
<?php

namespace AppAdminBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class AppAdminBundle extends AbstractPimcoreBundle
{
    public function getEditmodeJsPaths(): array
    {
        return [
            '/bundles/appadmin/js/pimcore/editmode.js'
        ];
    }
    
    public function getJsPaths()
    {
        return [
            '/bundles/appadmin/js/pimcore/startup.js'
        ];
    }
}
```


###### Registering global configuration via events

You can also add the file which should be loaded in editmode through an event listener to avoid having to implement a
`PimcoreBundle` just for the sake of adding a file. Given you already have an `App` bundle and put the JS config from above
to `public/js/editmode.js` you can create an event listener to add the path to the list of loaded
files in editmode (please see [Events](https://pimcore.com/docs/pimcore/current/Development_Documentation/Extending_Pimcore/Event_API_and_Event_Manager.html) for details on how
to implement and register event listeners):

```php
<?php

namespace App\EventListener;

use Pimcore\Event\BundleManager\PathsEvent;
use Pimcore\Bundle\AdminBundle\Event\BundleManagerEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class EditmodeListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            BundleManagerEvents::EDITMODE_JS_PATHS => 'onEditmodeJsPaths'
        ];
    }

    public function onEditmodeJsPaths(PathsEvent $event): void
    {
        $event->addPaths([
            '/bundles/app/js/pimcore/editmode.js'
        ]);
    }
}
```
