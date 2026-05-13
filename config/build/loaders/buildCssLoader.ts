import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildCssLoader = (isDev: boolean): webpack.RuleSetRule => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                esModule: false,
                modules: {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')), // 👈 авто-режим
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:8]'
                        : '[hash:base64:8]',
                },
            },
        },
        'sass-loader',
    ],
});
