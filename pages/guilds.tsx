// next imports
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

// ghost imports
import { Tags } from '@tryghost/content-api';

// chakra imports
import { Container, Button, Box, Text, Flex, Heading, Link, SimpleGrid, Image, chakra } from '@chakra-ui/react';

// lib imports
import { getAllTags } from '../lib/tags';

// component imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GuildTag from '../components/GuildTag';

// component definition.
export interface GuildsProps {
  tags: Tags[]
}

export default function Guilds({ tags }) {

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
        <Flex flexWrap="wrap" justiyContent="center">
          { mostPosts.map((guild,index) => <GuildTag key={index} guild={guild}/>)}
          <Heading
            as="h4"
            display={{
              sm: "none",
              xl: "block"
            }}
          >See Also</Heading>
          { restGuilds.map((guild, index) => (<GuildTag key={index} variant="secondary" guild={guild} />)) }
        </Flex>
      </chakra.main>
      <Footer />
    </>
  )
}

export async function getStaticProps(context: GetStaticProps) {

  let tags: Tags | null = null;

  tags = await getAllTags()

  tags = tags.filter(({name}) => name !== "#dark-version").reverse();

  console.log(tags);

  if (!tags) {
    return  { props: { notFound: true } };
  }

  return {
    props: {
      tags
    }
  }
}