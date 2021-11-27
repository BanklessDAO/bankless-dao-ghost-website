import { chakra, Container } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <chakra.div className="global-wrap">
      <chakra.div className="global-content" minW="350px" maxW="100%">
        <Head>
          <title>Bankless DAO</title>
          <meta name="description" content="Bankless DAO community site" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Container maxW="1200px" width="100%" overflow="auto" marginX="auto">
          {children}
        </Container>
        <Footer />
      </chakra.div>
    </chakra.div>
  );
}
