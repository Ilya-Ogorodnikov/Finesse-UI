import { generateBaseConfig } from './build/generateBaseConfig';
import { Configuration } from 'webpack';
import { IENVList } from '../types';

export default (env: IENVList): Configuration => {

  const mode = env.mode || 'development';
  const PORT = env.port || 3200;

  const isDev = mode === 'development';

  return generateBaseConfig({
    mode,
    isDev,
    port: PORT,
  });
}