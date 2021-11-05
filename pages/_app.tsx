// fonts
import '@fontsource/mulish/400.css';
import '@fontsource/source-code-pro/500.css';
import '@fontsource/spartan/500.css';

// normal imports
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import '../styles/Mobile.css';
import Head from 'next/head';
import { Web3Provider } from '../contexts/Web3Context';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Web3Provider>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
