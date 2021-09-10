// fonts
import '@fontsource/mulish/400.css';
import '@fontsource/source-code-pro/500.css';
import '@fontsource/spartan/700.css';

// normal imports
import type { AppProps } from 'next/app';
import { chakra, ChakraProvider, useMultiStyleConfig } from '@chakra-ui/react';
import theme from '../theme';
import { getSettings } from '../lib/settings';
import '../styles/Mobile.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { size } = pageProps;
  const styles = useMultiStyleConfig('App', { size });

  return (
    <ChakraProvider theme={theme}>
      <chakra.div sx={styles.wrapper}>
        <chakra.div sx={styles.content} maxW="100%">
          <Component {...pageProps} />
        </chakra.div>
      </chakra.div>
    </ChakraProvider>
  );
}

export default MyApp;
