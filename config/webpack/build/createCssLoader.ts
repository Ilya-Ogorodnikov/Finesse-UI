import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBaseConfigOptions } from '../../types';

export const createCssLoader = (isDevMode: IBaseConfigOptions['isDev']) => ({
  test: /\.s[ac]ss$/i,
  use: [
    // лоадеры для преобразования css в js, чтобы вебпак мог с этим работать
    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,

    // лоадер для обработки css-файлов
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')), // для каких файлов будет использоваться данный лоадер
          localIdentName: isDevMode ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]', // как будут выглядеть названия классов в разных режимах
        },
      },
    },

    // для prod-режима используем postcss-loader с плагином autoprefixer, который, в зависимости от опций, будет подставлять для 
    // кроссбраузерности вендорные префиксы
    !isDevMode && {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer',
              {
                overrideBrowserslist: ['> 0.2%', 'last 4 versions'], // для каких браузеров будут автопрефиксы
                grid: true, // разрешаем автопрефиксы для гридов
                flexbox: true, // разрешаем автопрефиксы для флексов
              },
            ],
          ],
          sourceMap: true, // source-map для простоты отладки
        },
      },
    },
    'sass-loader', // лоадер для обработки s(a|c)ss файлов
  ].filter(Boolean),
});
