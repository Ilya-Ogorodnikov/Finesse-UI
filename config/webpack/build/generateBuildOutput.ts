import { Configuration } from 'webpack';
import { pathResolver } from '../../utils';

export const generateBuildOutput = (): Configuration['output'] => {
  return {
    filename: '[name].[contenthash].js', // выходное название файла со скриптом 
    path: pathResolver('dist'), // путь, куда складывается сбилженный проект
    clean: true, // после каждого билда удаляем старые файлы
  };
};
