import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import * as webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";

export function buildPlugins({paths}: BuildOptions): Array<webpack.WebpackPluginInstance> {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin()
    ]
}
