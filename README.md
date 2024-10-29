# Quill WYSIWYG Pimcore Bundle
This bundle provides the [Quill 2.x](https://quilljs.com/) WYSIWYG editor integration for Pimcore. 
This includes the WYSIWYG for Documents, Data Objects and Shared Translations. 

## Installation

```bash
composer install pimcore/quill-bundle
```

Make sure the bundle is enabled in the `config/bundles.php` file. The following lines should be added:

```php
use Pimcore\Bundle\QuillBundle\PimcoreQuillBundle;
// ...

return [
    // ...
    PimcoreQuillBundle::class => ['all' => true],
    // ...
];
```