import { Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { IBaseConfigOptions } from '../../types';

export const generateDevServer = (options: IBaseConfigOptions): ConfigurationDevServer => {
  const { port } = options;

  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    allowedHosts: 'all',
    compress: true,
  };
};
