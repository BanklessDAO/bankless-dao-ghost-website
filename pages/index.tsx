import Head from 'next/head';
import Image from 'next/image';
import { Container, Box, Text, Heading, Link, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';

export default function Home({ featured, posts }) {
 
  console.log(posts);

  return (
    <div >
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="4xl">
        <Box>
          <Heading as="h1" mb={4}>Bankless DAO</Heading>
          <Text fontSize="xl">Welcome to the bankless community.</Text>
          <Link mx="20px" href="/">home</Link>
        </Box>
      </Container>
      <Box>
        <Heading>{ featured.title }</Heading>
      </Box>

      <SimpleGrid columns={2} rows={2} gap={8}>
        { posts.map(post => (
          <Box key={post.id} padding="16px" borderLeft="2px dotted" background="black" color="white">
            <Heading as="h3">
              <Link>
                { post.title }
              </Link>
            </Heading>
            <Text>
              { post.primary_author.name }
            </Text>
            <Text isTruncated>
              { post.excerpt }
            </Text>
            <Box>
              { post.tags.map(tag => (
                <Link key={tag.id} textTransform="lowercase">#{ tag.name }</Link>
              )) }
            </Box>
          </Box>
        )) }
      </SimpleGrid>
    </div>
  )
}


export async function getStaticProps(context: GetStaticProps) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    }
  }

  let pageContent = {
    featured: {},
    posts: []
  };

  posts.forEach(post => {
    if(post.featured) {
      pageContent.featured = post;
    } else {
      pageContent.posts.push(post);
    }
  });

  return {
    props: pageContent
  }

}