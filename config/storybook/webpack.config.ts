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
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true));
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map(
        (rule: webpack.RuleSetRule): webpack.RuleSetRule => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        },
    );
    config.module.rules.push(buildSvgLoader(true));
    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
    }));

    return config;
};
