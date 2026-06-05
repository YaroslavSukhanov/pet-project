import { fileURLToPath } from 'node:url';
import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

const currentFilename = fileURLToPath(import.meta.url);
const currentDirname = path.dirname(currentFilename);

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(currentDirname, '..', '..', 'src'),
    };
    const { resolve, module: moduleConfig, plugins } = config;

    resolve?.modules?.push(paths.src);
    resolve?.extensions?.push('.ts', '.tsx');
    moduleConfig?.rules?.push(buildCssLoader(true));

    if (moduleConfig?.rules) {
        moduleConfig.rules = moduleConfig.rules.map((rule) => {
            if (rule && typeof rule === 'object' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    moduleConfig?.rules?.push(buildSvgLoader(true));

    plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));

    return config;
};
