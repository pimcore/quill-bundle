---
title: Upgrade Information
---

# Upgrade Information

## Upgrade to 2026.1.0

### PHP / Symfony Requirements

- Added support for PHP 8.5
- Dropped PHP 8.3 and Symfony 6 support — upgrade to PHP 8.4+ and Symfony 7 before updating to this version

### Removed Admin Classic UI (ExtJS) Support

The bundle no longer supports the Pimcore Admin Classic UI (ExtJS). All ExtJS-related
code and assets have been removed:

- `PimcoreQuillBundle` no longer implements `PimcoreBundleAdminClassicInterface` and no longer uses `BundleAdminClassicTrait`
- Removed methods: `getJsPaths()`, `getCssPaths()`, `getEditmodeCssPaths()`, `getEditmodeJsPaths()` (from `BundleAdminClassicTrait`)
- All classic admin public assets have been removed:
  - `public/js/editor.js`
  - `public/css/editor.css` and icon assets under `public/css/icons/`
  - Quill library assets under `public/quill/` and `public/quill-table-better/`

The bundle now exclusively supports the Pimcore Studio UI. `pimcore/studio-ui-bundle`
and `pimcore/studio-backend-bundle` are now required dependencies.
