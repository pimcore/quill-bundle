---
title: Installation
---

# Installation

## Requirements

- PHP 8.5
- Pimcore 2026.1 or later
- Studio UI bundle 0.12.9 or later

## Install

```bash
composer require pimcore/quill-bundle
```

Enable the bundle in `config/bundles.php`:

```php
use Pimcore\Bundle\QuillBundle\PimcoreQuillBundle;
// ...

return [
    // ...
    PimcoreQuillBundle::class => ['all' => true],
    // ...
];
```

For toolbar and theme options, see [Configuration](../02_Configuration.md).
If you are replacing TinyMCE, see [Migration from TinyMCE](../03_Migration_to_Quill.md).
