import { Configuration } from 'webpack';
import { pathResolver } from '../../utils';

export const generateBuildResolve = (): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [pathResolver('src'), 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': pathResolver('src'),
    },
  };
};
