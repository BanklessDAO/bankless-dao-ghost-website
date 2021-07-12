import Head from 'next/head';
import Image from 'next/image';
import { Container, Box, Text, Heading, Link, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="4xl">
        <Box>
          <Heading mb={4}>Bankless DAO</Heading>
          <Text fontSize="xl">Welcome to the bankless community.</Text>
          <Link mx="20px" href="/">home</Link>
        </Box>
      </Container>
    </div>
  )
}