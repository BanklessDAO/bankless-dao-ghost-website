// next imports
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { Tag } from '@tryghost/content-api';

// chakra imports
import { Flex, Heading } from '@chakra-ui/react';

// lib imports
import { getAllTags } from '../lib/tags';

// component imports
import AnalyticsEventTracker from '../components/AnalyticsEventTracker';
import GuildTag from '../components/GuildTag';

export default function Guilds({ tags }: any) {
  const mostPosts = tags.slice(0, 3);
  const restGuilds = tags.slice(3);

  return (
    <>
      <Head>
        <title>Guilds | Bankless DAO</title>
      </Head>
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        marginTop="8vh"
        marginBottom="8vh"
        overflowWrap="break-word">
        {mostPosts.map((guild: Tag, index: number) => (
          <GuildTag key={index} guild={guild} variant="primary" tagLevel={false} />
        ))}
        <Heading
          as="h4"
          display={{
            sm: 'none',
            xl: 'block',
          }}
          fontSize="20px"
          margin="5vh 0"
          width="100%"
          lineHeight="1.2"
          textAlign="center">
          See Also
        </Heading>
        {restGuilds.map((guild: Tag, index: number) => (
          <GuildTag key={index} variant="secondary" guild={guild} tagLevel={false} />
        ))}
      </Flex>
      <AnalyticsEventTracker
        events={[{
          eventType: "view",
          eventName: "VIEWED_PAGE",
          data: {
            pageTitle: "ALL_GUILD_PAGE"
          }
        }]} />
    </>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  let tags: any;

  tags = await getAllTags();

  tags = tags
    .filter(({ name }: { name: string }) => name !== '#dark-version')
    .reverse();

  if (!tags) {
    return { props: { notFound: true } };
  }

  return {
    props: {
      tags,
    },
  };
}
