// fonts
import "@fontsource/mulish/400.css";
import "@fontsource/source-code-pro/500.css";
import "@fontsource/spartan/700.css";

// normal imports
import type { AppProps } from 'next/app';
import { chakra, ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';
import { getSettings } from "../lib/settings";
import "../styles/Navbar.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div className="global-wrap">
        <chakra.div className="global-content" maxW="100%">
          <Component {...pageProps} />
        </chakra.div>
      </chakra.div>
    </ChakraProvider>
  );
}


export default MyApp
