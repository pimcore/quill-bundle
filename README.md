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
In addition to this you can also configure `undo`, `redo` and `html-edit`.   

The WYSIWYG editable allows us to specify the toolbar.
If you have to limit styling options (for example only basic styles like `<b>` tag and lists would be allowed), just use `toolbar` option.

```twig
<section id="marked-content">
    {{  pimcore_wysiwyg("specialContent", {
            modules: {
                toolbar: {
                    container: [
                        ['undo', 'redo'],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['html-edit']
                    ]
                } 
            }
        })
    }}
</section>
```

Now the user can use only the limited toolbar.

##### Global Configuration
See [admin-ui-classic-bundle](./doc/02_Global_Configuration_Admin_Ui.md)
See [studio-ui-bundle](./doc/03_Global_Configuration_Studio_Ui.md)