<?php
declare(strict_types=1);

/**
 * Pimcore
 *
 * This source file is available under following license:
 * - Pimcore Commercial License (PCL)
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     PCL
 */

namespace Pimcore\Bundle\QuillBundle;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\PimcoreBundleAdminClassicInterface;
use Pimcore\Extension\Bundle\Traits\BundleAdminClassicTrait;
use Pimcore\Extension\Bundle\Traits\PackageVersionTrait;

class PimcoreQuillBundle extends AbstractPimcoreBundle implements PimcoreBundleAdminClassicInterface
{
    use BundleAdminClassicTrait;
    use PackageVersionTrait;

    public function getPath(): string
    {
        return dirname(__DIR__);
    }

    public function getJsPaths(): array
    {
        return [
            '/bundles/pimcorequill/quill/quill.js',
            '/bundles/pimcorequill/quill-table-better/quill-table-better.js',
            '/bundles/pimcorequill/quill-html-edit-button/quill.htmlEditButton.min.js',
            '/bundles/pimcorequill/js/editor.js',
        ];
    }

    public function getCssPaths(): array
    {
        return [
            '/bundles/pimcorequill/css/editor.css',
            '/bundles/pimcorequill/quill/quill.snow.css',
            '/bundles/pimcorequill/quill-table-better/quill-table-better.css',
        ];
    }

    public function getEditmodeCssPaths(): array
    {
        return $this->getCssPaths();
    }

    public function getEditmodeJsPaths(): array
    {
        return $this->getJsPaths();
    }
}
