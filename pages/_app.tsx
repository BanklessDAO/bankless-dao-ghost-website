// fonts
import "@fontsource/mulish/400.css";
import "@fontsource/source-code-pro/500.css";
import "@fontsource/spartan/700.css";

// normal imports
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp
