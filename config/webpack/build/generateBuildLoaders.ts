import { Configuration } from "webpack";
import { IBaseConfigOptions } from "../../types";
import { createCssLoader } from './createCssLoader';
import { createBabelLoader } from './createBabelLoader';

export const generateBuildLoaders = (options: IBaseConfigOptions): Configuration["module"] => {
  const { isDev } = options;

  const cssLoader = createCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const fileLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  const codeBabelLoader = createBabelLoader({...options, isTsx: false });

  const tsxBabelLoader = createBabelLoader({...options, isTsx: true });

  return {
    rules: [svgLoader, codeBabelLoader, tsxBabelLoader, cssLoader, imageLoader, fileLoader],
  };
};
