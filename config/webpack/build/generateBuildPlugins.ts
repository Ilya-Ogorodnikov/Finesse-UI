import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration, ProgressPlugin } from "webpack";
import { getFileName, pathResolver } from "../../utils"
import { IBaseConfigOptions } from "../../types";

export const generateBuildPlugins = (options: IBaseConfigOptions): Configuration['plugins'] => {
  const { isDev } = options;
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
    isDev && new ReactRefreshWebpackPlugin(),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     diagnosticOptions: {
    //       semantic: true,
    //       syntactic: true,
    //     },
    //     mode: 'write-references',
    //   },
    // }),
  ].filter(Boolean)
}