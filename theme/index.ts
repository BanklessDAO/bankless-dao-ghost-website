// Charka extendTheme.
import { baseStyle, extendTheme } from '@chakra-ui/react';

// Import override modules.
import breakpoints from './breakpoints';
import colors from './colors';
import styles from './styles';
import fonts from './fonts';

// Import component overrides.
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
  components: {
    Button,
    List,
    Link,
    Input,
    Menu,
    GuildTag,
  },
};

export default extendTheme(overrides);
