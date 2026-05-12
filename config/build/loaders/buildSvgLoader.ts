import webpack from 'webpack';

export const buildSvgLoader = (isDev: boolean): webpack.RuleSetRule => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
});
