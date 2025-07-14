import HTMLWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): Array<webpack.WebpackPluginInstance> {
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin()
    ]
}
