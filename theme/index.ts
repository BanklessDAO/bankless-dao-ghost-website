// Charka extendTheme.
import { baseStyle, extendTheme } from '@chakra-ui/react';

// Import override modules.
import breakpoints from './breakpoints';
import colors from './colors';
import styles from './styles';
import fonts from './fonts';
import fontWeights from './fontWeights';

// Import component overrides.
import App from './components/app';
import Footer from './components/footer'
import Button from './components/button';
import List from './components/list';
import Link from './components/link';
import Input from './components/input';
import Menu from './components/menu';
import GuildTag from './components/guild-tag';

// Custom app theme overrides.
const overrides: any = {
  colors,
  styles,
  breakpoints,
  fonts,
  fontWeights,
  colors: {
      "bg-nav": "#242d39",
      "accent": "#ff1a1a",
      "body": "#182029",
      "details": "#ff1a1a",
      "two": "#f7f9f9",
      "dots": "#485b73",
      "three": "#485b73",
      "font-two": "#182029",
      "announcements": "#fed672"
  },
  components: {
      App,
      Footer,
      Button,
      List,
      Link,
      Input,
      Menu,
      GuildTag,
  },
};

export default extendTheme(overrides);
