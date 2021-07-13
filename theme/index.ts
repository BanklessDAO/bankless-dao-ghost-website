// Charka extendTheme.
import { extendTheme } from "@chakra-ui/react";

// Import override modules.
import breakpoints from './breakpoints';
import styles from './styles';
import fonts from './fonts';

// Import component overrides.
import Button from './components/button';
import List from "./components/list";
import Link from "./components/link";

// Custom app theme overrides.
const overrides = {
    styles,
    breakpoints,
    fonts,
    components: {
        Button,
        List,
        Link
    }
};

export default extendTheme(overrides);