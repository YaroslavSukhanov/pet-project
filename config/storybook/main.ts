import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
    ],
    framework: '@storybook/react-webpack5',
    webpackFinal: async (storybookConfig) => {
        if (storybookConfig.resolve) {
            storybookConfig.resolve.modules = [
                path.resolve(currentDir, '..', '..', 'src'),
                'node_modules',
            ];
            storybookConfig.resolve.extensions = [
                ...(storybookConfig.resolve.extensions ?? []),
                '.ts',
                '.tsx',
            ];
        }
        return storybookConfig;
    },
};

export default config;
