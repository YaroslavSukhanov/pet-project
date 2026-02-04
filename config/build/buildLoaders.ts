import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

// export function buildLoaders({isDev}: BuildOptions): Array<webpack.RuleSetRule> {
//     const cssLoader = {
//         test: /\.s[ac]ss$/i,
//         use: [
//             // Creates `style` nodes from JS strings
//             isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
//             {
//                 loader: 'css-loader',
//                 options: {
//                     modules: {
//                         auto: (resPath: string) => resPath.includes('.module.'),
//                         localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' :  '[hash:base64:8]',
//                     }
//                 }
//             },
//             "sass-loader",
//         ],
//     }
//
//     const typescriptLoader =
//         {
//             test: /\.tsx?$/,
//             use: 'ts-loader',
//             exclude: /node_modules/,
//         };
//
//     return [
//         cssLoader,
//         typescriptLoader
//     ];
// }

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const moduleScssLoader = {
        test: /\.module\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    esModule: false,
                    modules: {
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        moduleScssLoader,
        scssLoader,
        typescriptLoader,
    ];
}

