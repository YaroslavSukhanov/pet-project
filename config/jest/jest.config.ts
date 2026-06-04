/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    moduleDirectories: ['node_modules', 'src'],

    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'mts',
        'cts',
        'tsx',
        'json',
        'node',
    ],
    rootDir: '../../',
    testMatch: [
        '<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': '<rootDir>/config/jest/jestEmptyComponent.tsx',
        '^entities/(.*)$': '<rootDir>/src/entities/$1',
    },
    globals: {
        __IS_DEV__: true,
        __API__: '',
    },

};

export default config;
