import Head from 'next/head';
import { Container, Box, Text, Heading, Link, SimpleGrid, Image } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';
import { getFeaturedPages } from '../lib/pages';
import { PostOrPage } from '@tryghost/content-api';

export default function Home({ featuredPages, featured, posts }) {

  return (
    <div >
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" px="6%" color="white">
        <Heading as="h3">Announcments</Heading>
        { featuredPages.map(page => (
          <Box>
            <Text>{ page.title }</Text>
          </Box>
        )) }
      </Container>
      <Container maxW="100%" px="6%">
        <Box color="white">
          <Image src="bankless-logo.png" width="300px" height="auto" alt="Bankless DAO logo"/>
          <Heading as="h1" mb={4}>Bankless DAO</Heading>
          <Text fontSize="xl">Welcome to the bankless community.</Text>
          <Link mx="20px" href="/">home</Link>
        </Box>
        <Box>
          <Heading>{ featured.title }</Heading>
        </Box>

        <SimpleGrid columns={2} rows={2} gap={8}>
          { posts.map(post => (
            <Box key={post.id} padding="16px" borderLeft="1px dashed #485b73" color="white">
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
      </Container>
    </div>
  )
}


export async function getStaticProps(context: GetStaticProps) {
  const posts = await getPosts();
  const featuredPages = await getFeaturedPages();

  if (!posts) {
    return {
      notFound: true,
    }
  }

  let pageContent = {
    featuredPages: featuredPages,
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