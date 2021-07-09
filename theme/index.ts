// Charka extendTheme.
import { extendTheme } from "@chakra-ui/react";

// Import override modules.
import breakpoints from './breakpoints';

// Import component overrides.
import Button from './components/button';

// Custom app theme overrides.
const overrides = {
    breakpoints,
    components: {
        Button
    }
};

export default extendTheme(overrides);