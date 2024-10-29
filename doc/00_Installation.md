# Installation

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