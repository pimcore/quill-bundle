<?php
declare(strict_types=1);

/**
 * This source file is available under the terms of the
 * Pimcore Open Core License (POCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (https://www.pimcore.com)
 *  @license    Pimcore Open Core License (POCL)
 */

namespace Pimcore\Bundle\QuillBundle;

use Pimcore\Bundle\QuillBundle\DependencyInjection\PimcoreQuillExtension;
use Pimcore\Extension\Bundle\AbstractPimcoreBundle;
use Pimcore\Extension\Bundle\PimcoreBundleAdminClassicInterface;
use Pimcore\Extension\Bundle\Traits\BundleAdminClassicTrait;
use Pimcore\Extension\Bundle\Traits\PackageVersionTrait;
use Symfony\Component\DependencyInjection\Extension\ExtensionInterface;

class PimcoreQuillBundle extends AbstractPimcoreBundle implements PimcoreBundleAdminClassicInterface
{
    use BundleAdminClassicTrait;
    use PackageVersionTrait;

    public function getContainerExtension(): ExtensionInterface
    {
        return new PimcoreQuillExtension();
    }

    public function getPath(): string
    {
        return dirname(__DIR__);
    }

    public function getJsPaths(): array
    {
        return [
            '/bundles/pimcorequill/quill/quill.js',
            '/bundles/pimcorequill/quill-table-better/quill-table-better.js',
            '/bundles/pimcorequill/js/editor.js',
        ];
    }

    public function getCssPaths(): array
    {
        return [
            '/bundles/pimcorequill/css/editor.css',
            '/bundles/pimcorequill/quill/quill.snow.css',
            '/bundles/pimcorequill/quill/quill.bubble.css',
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
