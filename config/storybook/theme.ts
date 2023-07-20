import { create } from "@storybook/theming";
import Logo from '../../src/resource/Logo.png';

// модификация внешнего вида storybook
export default create({
  base: 'dark',
  brandTitle: 'Finesse-UI',
  brandImage: Logo
})