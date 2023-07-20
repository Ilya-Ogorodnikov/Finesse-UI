import { Configuration } from 'webpack';
import { pathResolver } from '../../utils';

export const generateBuildResolve = (): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'], // к каким файлам можно не писать расширения
    preferAbsolute: true, // предпочтительнее абсолютные пути
    modules: [pathResolver('src'), 'node_modules'], // в каких каталогах (по уменьшению приоритета слева направо) искать файлы
    mainFiles: ['index'], // имя файла, которое будет использоваться при поиске в конкретном каталоге
    alias: { // настройка алиасов
      '@': pathResolver('src'),
    },
  };
};
