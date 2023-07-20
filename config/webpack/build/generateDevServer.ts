import { Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { IBaseConfigOptions } from '../../types';

export const generateDevServer = (options: IBaseConfigOptions): ConfigurationDevServer => {
  const { port } = options;

  return {
    port, // порт, на котором запускается приложение
    open: true, // открывать ли приложение сразу после сборки
    historyApiFallback: true, // для корректной работы маршрутизации (по умолчанию на каждую страницу браузер отправляет запрос на получение index.thml)
    hot: true, // флаг, по которому при изменении в файлах проекта будет осуществляться пересборка
    client: { // настройки для отображения ошибок и предупреждений после сборки в открытом в браузере приложении
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    allowedHosts: 'all', // хосты, которым разрешен доступ к серверу разработки
    compress: true, // для сжатия всех файлов
  };
};
