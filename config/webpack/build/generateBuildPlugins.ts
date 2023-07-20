import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration, ProgressPlugin } from 'webpack';
import { getFileName, pathResolver } from '../../utils';
import { IBaseConfigOptions } from '../../types';

export const generateBuildPlugins = (options: IBaseConfigOptions): Configuration['plugins'] => {
  const { isDev } = options;

  return [
    // плагин для настройки index.html файла.
    new HtmlWebpackPlugin({
      title: 'Finesse-UI', // название на вкладке браузера
      template: pathResolver('public', 'index.html'), // путь до шаблона, в который вебпак будет подключать скрипты 
      favicon: pathResolver('src', 'resource', 'favicon', 'favicon.png'), // путь до фавикона
    }),

    // плагин для работы с файлами css. Предоставляет возможность их видоизменять (в частности название файла и чанков)
    new MiniCssExtractPlugin({
      filename: getFileName({ directory: 'css', extension: 'css' }),
      chunkFilename: getFileName({ directory: 'css', extension: 'css' }),
    }),

    // плагин для иллюстрации процесса сборки
    new ProgressPlugin(),

    // плагин для dev-режима, с которым лучше подхватываются изменения в react-файлах для Hot Module Replacement
    isDev && new ReactRefreshWebpackPlugin(),

    // плагин для реализации type-чекинга в отдельном процессе (не во время сборки основного бандла),
    // требует настройки "isolatedModules" в tsconfig.json. Значительно ускоряет время сборки
    new ForkTsCheckerWebpackPlugin(),
  ].filter(Boolean);
};
