import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, ProgressPlugin } from "webpack";
import { getFileName, pathResolver } from "../../utils"

export const generateBuildPlugins = (): Configuration['plugins'] => {
  return [
    new HtmlWebpackPlugin({
      title: 'Finesse-UI',
      template: pathResolver('public', 'index.html'),
      favicon: pathResolver('src', 'resource', 'favicon', 'favicon.png'),
    }),
    new MiniCssExtractPlugin({
      filename: getFileName({ directory: 'css', extension: 'css' }),
      chunkFilename: getFileName({ directory: 'css', extension: 'css' }),
      
    }),
    new ProgressPlugin(),
  ]
}