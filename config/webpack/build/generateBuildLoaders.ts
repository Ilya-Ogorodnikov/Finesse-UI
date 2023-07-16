import { Configuration } from "webpack";
import { IBaseConfigOptions } from "../../types";
import { createCssLoader } from './createCssLoader';

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

  const TSLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };


  return {
    rules: [svgLoader, cssLoader, imageLoader, fileLoader, TSLoader],
  };
};
