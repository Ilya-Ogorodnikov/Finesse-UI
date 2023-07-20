import { IBaseConfigOptions } from 'config/types';

interface ICreateBabelLoader extends IBaseConfigOptions {
  isTsx?: boolean;
}

export const createBabelLoader = (options: ICreateBabelLoader) => {
  const { isDev, isTsx } = options;
  // настройка babel для работы с ts и jsx
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/, // какие каталоги исключаем
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-typescript',
            {
              isTsx,
            },
          ],
          '@babel/plugin-transform-runtime',
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
};
