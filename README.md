---
title: Quill WYSIWYG Editor
---

# Quill WYSIWYG Editor

> **Deprecated:** This bundle is deprecated and will no longer be part of the
> Pimcore Platform LTS starting with the 2027 release line. It remains fully
> supported in the 2026.x LTS. Existing installations are not affected before
> then, but new projects should evaluate alternative WYSIWYG editor bundles.

Integrates the [Quill 2.x](https://quilljs.com/) WYSIWYG editor into Pimcore.
Quill provides rich-text editing for documents, data objects, and shared translations.

## Features

- Rich-text editing based on [Quill 2.x](https://quilljs.com/) with built-in
  undo/redo and HTML source editing
- WYSIWYG support for document editables, data object fields, and shared translations
- Per-field toolbar configuration through Twig editables
- Global editor defaults through Symfony configuration (`pimcore_studio_ui`)

## Documentation Overview

- [Installation](./doc/00_Installation/README.md)
- [Configuration](./doc/02_Configuration.md) - toolbar options, global defaults, and themes
- [Migration from TinyMCE](./doc/03_Migration_to_Quill.md)
- [Upgrade Information](./doc/00_Installation/01_Upgrade.md)
