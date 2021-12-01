import { create } from '@storybook/theming'
import Logo from './logo-long.png'

export default create({
  base: 'light',
  brandTitle: 'My custom storybook',
  brandImage: Logo,
})
