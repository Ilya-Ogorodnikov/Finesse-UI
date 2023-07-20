import { addons } from '@storybook/manager-api';
import theme from './theme';

// добавляем кастомные настройки в сетап сторибука
addons.setConfig({
  theme,
});