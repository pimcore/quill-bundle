---
title: Configuration
---

# Configuration

The Quill editor supports configuration through Pimcore editables (per-field) and
Symfony configuration (global defaults).

## Default Toolbar

When no custom toolbar is configured, the editor uses this default:

```
undo, redo | H1-H6 headings | bold, italic | alignment |
ordered list, bullet list | indent, outdent | blockquote |
link, table | clean, html-edit
```

## Toolbar Configuration in Twig

The `pimcore_wysiwyg` editable accepts Quill configuration options directly.
Use the `modules.toolbar.container` array to define which toolbar controls are available.

### Basic example

```twig
{{ pimcore_wysiwyg("content", {
        modules: {
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }]
                ]
            }
        }
    })
}}
```

### Toolbar with undo, redo, and HTML editing

In addition to [standard Quill toolbar options](https://quilljs.com/docs/modules/toolbar),
the bundle provides `undo`, `redo`, and `html-edit` controls.

```twig
{{ pimcore_wysiwyg("content", {
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
```

Controls not listed in the `container` array are excluded from the toolbar.

## Global Configuration

Global WYSIWYG defaults are configured under the `pimcore_studio_ui` extension
provided by the Studio UI bundle. The Quill bundle does not define its own
configuration namespace.

These defaults apply to all WYSIWYG fields unless overridden per-field in Twig.

```yaml
# config/packages/pimcore_studio_ui.yaml
pimcore_studio_ui:
    wysiwyg:
        defaultEditorConfig:
            dataObject:
                modules:
                    toolbar:
                        container:
                            - [{ header: [1, 2, 3, 4, 5, 6, false] }]
            document:
                modules:
                    toolbar:
                        container:
                            - [{ header: [1, 2, 3, 4, 5, 6, false] }]
```

- `dataObject` - applies to WYSIWYG fields in data object classes
- `document` - applies to WYSIWYG editables in documents
- Per-field configuration in Twig overrides these global defaults
- Shared translations use the Quill editor but do not have a separate global config key

:::note
The configuration structure under `dataObject` and `document` follows the
[Quill configuration format](https://quilljs.com/docs/configuration/).
:::

## Themes

Quill supports multiple themes that control the editor's appearance.
Set the theme in the Quill configuration options:

```twig
{{ pimcore_wysiwyg("content", {
        theme: "snow"
    })
}}
```

See the [Quill themes documentation](https://quilljs.com/docs/customization/themes)
for available themes.
