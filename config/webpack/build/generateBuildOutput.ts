import { Configuration } from 'webpack';
import { pathResolver } from '../../utils';

export const generateBuildOutput = (): Configuration['output'] => {
  return {
    filename: '[name].[contenthash].js',
    path: pathResolver('dist'),
    clean: true,
  };
};
