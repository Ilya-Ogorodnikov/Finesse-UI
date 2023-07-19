import type { StorybookConfig } from '@storybook/react-webpack5';
import sass from 'sass'
import path from 'path'
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    { name: '@storybook/addon-styling', options: { sass } }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve!.alias = {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../', '../', 'src')
      }}

      if (config.module) {
        // @ts-ignore
        config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
          if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }
          return rule;
        });
      }

      config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    return config
  }
};
export default config;
