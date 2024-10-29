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

use Pimcore\Bundle\EnterpriseSubscriptionToolsBundle\Bundle\EnterpriseBundleInterface;
use Pimcore\Bundle\EnterpriseSubscriptionToolsBundle\PimcoreEnterpriseSubscriptionToolsBundle;
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
            '/bundles/pimcorequill/js/editor.js',
        ];
    }

    public function getCssPaths(): array
    {
        return [
            '/bundles/pimcorequill//quill/quill.snow.css'
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
