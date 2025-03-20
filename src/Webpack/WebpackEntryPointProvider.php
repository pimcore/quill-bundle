<?php
declare(strict_types=1);

namespace Pimcore\Bundle\QuillBundle\Webpack;

use Pimcore\Bundle\StudioUiBundle\Webpack\WebpackEntryPointProviderInterface;

/**
 * @internal
 */
final class WebpackEntryPointProvider implements WebpackEntryPointProviderInterface
{
    public function getEntryPointsJsonLocations(): array
    {
        return glob(__DIR__ . '/../../public/studio/build/*/entrypoints.json');
    }

    public function getEntryPoints(): array
    {
        return ['main'];
    }

    public function getOptionalEntryPoints(): array
    {
        return [];
    }

}