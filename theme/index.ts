// Charka extendTheme.
import { extendTheme } from "@chakra-ui/react";

// Import override modules.
import breakpoints from './breakpoints';
import styles from './styles';

// Import component overrides.
import Button from './components/button';
import List from "./components/list";

// Custom app theme overrides.
const overrides = {
    styles,
    breakpoints,
    components: {
        Button,
        List
    }
};

export default extendTheme(overrides);