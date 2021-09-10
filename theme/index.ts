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
import Footer from './components/footer';
import Button from './components/button';
import List from './components/list';
import Link from './components/link';
import Input from './components/input';
import Menu from './components/menu';
import GuildTag from './components/guild-tag';
import Header from './components/header';

// Custom app theme overrides.
const overrides: any = {
  colors,
  styles,
  breakpoints,
  fonts,
  fontWeights,
  components: {
    App,
    Footer,
    Button,
    List,
    Link,
    Header,
    Input,
    Menu,
    GuildTag,
  },
};

export default extendTheme(overrides);
