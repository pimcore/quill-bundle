---
title: Upgrade Information
---

# Upgrade Information

## Upgrade to 2026.2.1

### Frontend Build Ships as a Packaged Archive

The compiled Studio frontend is no longer committed as an expanded
`public/studio/build/` directory. It now ships as a single archive
(`build-dist/build-<id>.zip`) that is extracted into `public/studio/build/`
automatically during cache warmup.

`pimcore/studio-ui-bundle` `^2026.2.1` is now required, as it provides the
archive extraction.

> **Note:** Read-only filesystem deployments must run `bin/console cache:warmup`
> (or `cache:clear`) during the build/deploy phase while the bundle directory
> (usually under `vendor/`) is still writable. Standard Pimcore deployments
> already do this. When `assets:install` runs in copy mode, run `cache:warmup`
> before it, otherwise no frontend assets are copied. If the filesystem becomes
> read-only before the first warmup, the bundle fails with
> `BuildArchiveNotWritableException` because there is no build to serve.

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
