---
title: Migration from TinyMCE
---

# Migration from TinyMCE

Every WYSIWYG editor (TinyMCE, CKEditor, etc.) produces different markup.
Migrating between editors can result in different styling or formatting,
and in rare cases content that the new editor does not support.
Review existing content for compatibility after switching.

## Replace TinyMCE with Quill

1. Install the Quill bundle - see [Installation](./00_Installation/README.md)

2. Remove TinyMCE:

   ```bash
   composer remove pimcore/tinymce-bundle
   ```

   This also removes it from `config/bundles.php` if Symfony Flex is active.
   Otherwise, manually remove the bundle registration:

   ```php
   // Remove these lines from config/bundles.php:
   use Pimcore\Bundle\TinymceBundle\PimcoreTinymceBundle;

   return [
       // Remove:
       PimcoreTinymceBundle::class => ['all' => true],
   ];
   ```

3. Update Twig templates and configuration files to use Quill options instead
   of TinyMCE-specific settings. See [Configuration](./02_Configuration.md) for
   toolbar options and global defaults.

## Known Incompatibilities

### Tables and Lists

Quill renders TinyMCE tables and lists differently.
Check all WYSIWYG fields that contain tables or lists after migration.
