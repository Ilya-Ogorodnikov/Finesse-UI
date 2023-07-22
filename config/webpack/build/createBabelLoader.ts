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
          '@babel/preset-env', // позволяет писать на современном синтаксисе без использования полифилов для старых браузеров
          [
            '@babel/preset-typescript', // позволяет работать с TS и парсить jsx
            {
              isTsx
            }
          ],
          [
            '@babel/preset-react', // позволяет работать с React-кодом
            {
              runtime: 'automatic',
            },
          ],
        ],
        plugins: [
          // смотрит код на наличие ES6 фич и если они есть, трансформирует код так,
          // чтобы эти фичи брались не из глобального скоупа, а импортировались из babel-runtime
          '@babel/plugin-transform-runtime',

          // позволяет редактировать компоненты react и не терять их состояния после "горячей перезагрузки"
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
};
