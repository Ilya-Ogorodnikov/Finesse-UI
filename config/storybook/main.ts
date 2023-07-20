import type { StorybookConfig } from '@storybook/react-webpack5';
import sass from 'sass'
import path from 'path'
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'], // где искать стори-кейсы
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling', // необходим для работы с s(a|c)ss файлами
      options: {
        sass
      }
    }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  
  // поскольку у сторибука свои настройки сборщика - модифицируем конфиг под наши нужды
  webpackFinal: async (config) => {
    // сохраняем уже существующие в сторибуке алиасы, и лобавляем свои
    if (config.resolve) {
      config.resolve!.alias = {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../', '../', 'src')
      }}

      // убираем дефолтные лоадеры для работы с svg
      if (config.module) {
        config.module.rules = config.module.rules?.map((rule) => {
          if (/svg/.test((rule as RuleSetRule).test as string)) {
            return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
          }
          return rule;
        });
      }

      // добавляем свой лоадер для работы с svg
      config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    return config
  }
};
export default config;
