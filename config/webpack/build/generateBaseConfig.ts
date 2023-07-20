import { Configuration } from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { generateBuildLoaders } from './generateBuildLoaders';
import { generateBuildOutput } from './generateBuildOutput';
import { generateBuildPlugins } from './generateBuildPlugins';
import { generateBuildResolve } from './generateBuildResolve';
import { generateDevServer } from './generateDevServer';
import { IBaseConfigOptions } from '../../types';
import { pathResolver } from '../../utils';

type generateBaseConfigType = (options: IBaseConfigOptions) => Configuration;

export const generateBaseConfig: generateBaseConfigType = (options) => {
  const { mode, isDev } = options;

  return {
    mode, // режим приложения
    optimization: {
      minimizer: [`...`, !isDev && new CssMinimizerPlugin()], // для prod-режима сжимаем весь css в одну строку (под капотом использует cssnano)
    },
    entry: pathResolver('src', 'index.tsx'), // точка входа в приложение
    output: generateBuildOutput(), // точка выхода приложения
    plugins: generateBuildPlugins(options), // настройка плагинов
    module: generateBuildLoaders(options), // настройка лоадеров
    resolve: generateBuildResolve(), // настройка резолвера
    devServer: generateDevServer(options), // настройка dev-сервера
    devtool: isDev && 'source-map', // в dev-режиме используем source-map для более простой отладки
    cache: isDev, // для повышения скорости сборки в dev-режиме кешируем файлы
  };
};
