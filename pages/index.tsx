import Head from 'next/head';
import { Container, Box, Text, Heading, Link, SimpleGrid, Image } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';
import { getFeaturedPages } from '../lib/pages';
import { PostOrPage } from '@tryghost/content-api';
import { Post } from '../lib/types/ghost-types';

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
        { featuredPages.map(( page: any ) => (
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
          { posts.map((post: Post) => (
            <Box key={post.id} padding="16px" borderLeft="1px dashed #485b73" color="white">
              <Heading as="h3">
                <Link href={`${post.slug}`}>
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
                { post.tags.map((tag: Tag) => (
                  <Link key={tag.id} textTransform="lowercase">#{ tag.name }</Link>
                )) }
              </Box>
            </Box>
          )) }
        </SimpleGrid>
      </Container>
      <Box>
        <Heading>{ featured.title }</Heading>
      </Box>
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

  let pageContent: {
    featuredPages: any,
    featured: any,
    posts: Array<Post>
  } = {
    featuredPages: featuredPages,
    featured: {},
    posts: []
  };

  posts.forEach((post: any) => {
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