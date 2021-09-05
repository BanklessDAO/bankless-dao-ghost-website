// next imports
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Tag } from '@tryghost/content-api';

// chakra imports
import { Container, Button, Box, Text, Flex, Heading, Link, SimpleGrid, Image, chakra } from '@chakra-ui/react';

// lib imports
import { getAllTags, Tags } from '../lib/tags';

// component imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GuildTag from '../components/GuildTag';

export default function Guilds({ tags }: any) {

  const mostPosts = tags.slice(0,3);
  const restGuilds = tags.slice(3);

  return (
    <>
      <Head>
        <title>Guilds</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <chakra.main className="global-main">
        <Flex flexWrap="wrap" justifyContent="center" marginTop="8vh" marginBottom="8vh" overflowWrap="break-word">
          { mostPosts.map((guild: Tag,index: number) => <GuildTag key={index} guild={guild} variant="primary"/>)}
          <Heading
            as="h4"
            display={{
              sm: "none",
              xl: "block"
            }}
            fontSize="20px"
            margin="5vh 0"
            width="100%"
            lineHeight="1.2"
            textAlign="center"
          >See Also</Heading>
          { restGuilds.map((guild: Tag, index: number) => (<GuildTag key={index} variant="secondary" guild={guild} />)) }
        </Flex>
      </chakra.main>
      <Footer />
    </>
  )
}

export async function getStaticProps(context: GetStaticProps) {

  let tags: any;

  tags = await getAllTags();

  tags = tags.filter(({ name }: { name: string }) => name !== "#dark-version").reverse();

  if (!tags) {
    return  { props: { notFound: true } };
  }

  return {
    props: {
      tags
    }
  }
}