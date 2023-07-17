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
    mode,
    optimization: {
      minimizer: [`...`, !isDev && new CssMinimizerPlugin()],
    },
    entry: pathResolver('src', 'index.tsx'),
    output: generateBuildOutput(),
    plugins: generateBuildPlugins(options),
    module: generateBuildLoaders(options),
    resolve: generateBuildResolve(),
    devServer: generateDevServer(options),
    devtool: isDev && 'source-map',
    cache: isDev,
  };
};
