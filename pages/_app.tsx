// fonts
import "@fontsource/mulish/400.css";
import "@fontsource/source-code-pro/500.css";
import "@fontsource/spartan/700.css";

// normal imports
import type { AppProps } from 'next/app';
import { chakra, ChakraProvider, Container } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <chakra.div className="global-wrap">
        <Container className="global-content">
          <Component {...pageProps} />
        </Container>
      </chakra.div>
    </ChakraProvider>
  );
}
export default MyApp
