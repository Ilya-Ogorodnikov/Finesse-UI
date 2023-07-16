import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBaseConfigOptions } from "../../types";

export const createCssLoader = (isDevMode: IBaseConfigOptions['isDev']) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: (resPath: string) => Boolean(resPath.includes('.module.')),
          localIdentName: isDevMode ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
        },
      },
    },
    !isDevMode &&  {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            [
              'autoprefixer', {
                overrideBrowserslist: ['> 0.25%', 'last 4 versions'],
                grid: true,
                flexbox: true,
              },
            ],
            // [
            //   'cssnano', {
            //     preset: 'default',
            //   },
            // ],
          ],
          sourceMap: true
        } 
      }
    },
    'sass-loader',
  ].filter(Boolean),
});