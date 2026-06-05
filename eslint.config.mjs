// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU COPY THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from 'node:path';
import i18next from 'eslint-plugin-i18next';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { configs, plugins } from 'eslint-config-airbnb-extended';

const gitignorePath = path.resolve('.', '.gitignore');

const jsConfig = defineConfig([
    // ESLint recommended config
    {
        name: 'js/config',
        ...js.configs.recommended,
    },
    // Stylistic plugin
    plugins.stylistic,
    // Import X plugin
    plugins.importX,
    // Airbnb base recommended config
    ...configs.base.recommended,
]);

const reactConfig = defineConfig([
    // React plugin
    plugins.react,
    // React hooks plugin
    plugins.reactHooks,
    // React JSX A11y plugin
    plugins.reactA11y,
    // Airbnb React recommended config
    ...configs.react.recommended,
]);

const typescriptConfig = defineConfig([
    // TypeScript ESLint plugin
    plugins.typescriptEslint,
    // Airbnb base TypeScript config
    ...configs.base.typescript,
    // Airbnb React TypeScript config
    ...configs.react.typescript,
]);

export default defineConfig([// Ignore files and folders listed in .gitignore
    includeIgnoreFile(gitignorePath), // JavaScript config
    ...jsConfig, // React config
    ...reactConfig, // TypeScript config
    ...typescriptConfig, {
        name: 'custom/rules',
        languageOptions: {
            globals: {
                __IS_DEV__: true,
                __API__: true,
            },
        },
        rules: {
        // Индентацию рулит только @stylistic/indent
            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-indent': 'off',
            '@stylistic/jsx-indent-props': ['error', 4],
            'react/jsx-indent': 'off', // 👈 главный виновник цикла
            'react/jsx-indent-props': 'off', // 👈 та же история для пропсов
            'import-x/prefer-default-export': 'off',
            'import-x/no-cycle': ['error', { maxDepth: 10 }],
            'react/jsx-props-no-spreading': 'warn',
            'react/require-default-props': 'off',
            'react/function-component-definition': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'no-underscore-dangle': ['error', { allow: ['__IS_DEV__'] }],
            'i18next/no-literal-string': [
                'error',
                { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
            ],
            '@stylistic/max-len': ['error', { code: 100, ignoreComments: true }],
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'no-param-reassign': 'off',
            'react/prop-types': 'off',
            'jsx-a11y/heading-has-content': ['error', { components: ['Typography'] }],
        },
    }, {
        files: [
            'config/**/*.{ts,js}',
            '**/*.config.{ts,js}',
            'webpack.config.{ts,js}',
        ],
        rules: {
            'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
    }, {
        files: [
            '**/*.test.{ts,tsx,js,jsx}',
            '**/*.spec.{ts,tsx,js,jsx}',
            '**/*.stories.{ts,tsx,js,jsx}',
            '**/setupTests.ts',
            '**/lib/tests/**',
        ],
        rules: {
            'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
        },
    }, {
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/naming-convention': 'off',
            'no-underscore-dangle': 'off',
        },
    }, i18next.configs['flat/recommended'], ...storybook.configs['flat/recommended']]);
