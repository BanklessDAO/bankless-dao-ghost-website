// fonts
import '@fontsource/mulish/400.css';
import '@fontsource/source-code-pro/500.css';
import '@fontsource/spartan/700.css';

// normal imports
import type { AppProps } from 'next/app';
import { chakra, ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/Mobile.css';
import Head from 'next/head';
import { Web3Provider } from '../contexts/Web3Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Web3Provider>
        <chakra.div className="global-wrap">
          <chakra.div className="global-content" maxW="100%">
            <Component {...pageProps} />
          </chakra.div>
        </chakra.div>
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
