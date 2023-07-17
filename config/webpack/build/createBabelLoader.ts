import { IBaseConfigOptions } from "config/types";

interface ICreateBabelLoader extends IBaseConfigOptions {
  isTsx?: boolean;
}

export const createBabelLoader = (options: ICreateBabelLoader) => {
  const { isDev, isTsx } = options;
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react', {
              runtime: "automatic"
            }
          ]
        ],
        plugins: [
          [
            '@babel/plugin-transform-typescript', {
              isTsx
            }
          ],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  }
};