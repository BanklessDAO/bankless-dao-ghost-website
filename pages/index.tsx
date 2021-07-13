import Head from 'next/head';
import { Container, Box, Text, Flex, Heading, Link, SimpleGrid, Image } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';
import { getFeaturedPages } from '../lib/pages';
import { PostOrPage, Tag, Author } from '../lib/types/ghost-types';

import Navbar from '../components/Navbar';

type HomeProps = {
  featuredPages: PostOrPage[],
  featured: PostOrPage,
  posts: PostOrPage[]
};

export default function Home({ featuredPages, featured, posts }: HomeProps) {

  return (
    <div >
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="100%" px="6%">
        <Navbar />
        <Box>
          <Heading className="global-underline">{ featured.title }</Heading>
        </Box>
        <SimpleGrid columns={2} rows={2} gap={8}>
          { posts.map((post: PostOrPage) => (
            <Box 
              as="article" 
              key={post.id} 
              color="white"
              paddingRight="35px"
              paddingLeft="60px"
              width="100%"
              marginTop="12vh"
              paddingTop="0"
              paddingBottom="0"
            >
              <Flex 
                className="item-container"
                position="relative"
                maxW="100%"
                boxSizing="border-box"
                borderLeft="1px dashed #485b73"
                flexDir="column"
                >
                <Box 
                  className="item-content"
                  width="100%"
                  padding= "10px 0 10px 5%"
                  >
                  <Heading 
                    as="h2" 
                    fontSize="24px" 
                    fontFamily="one"
                    width="calc(93% - 125px)"
                    >
                    <Link 
                      className="global-underline" 
                      href={`${post.slug}`} 
                      textDecoration="none"
                      >
                      { post.title }
                    </Link>
                  </Heading>
                  <Text className="global-meta">
                    { post.primary_author.name }
                  </Text>
                  <Text fontFamily="one" fontWeight="500" fontSize="13px" isTruncated>
                    { post.excerpt }
                  </Text>
                  <Box className="global-tags">
                    { post.tags.map((tag: Tag) => (
                      <Link 
                        key={tag.id} 
                        textTransform="lowercase" 
                        textDecoration="none"
                        >#{ tag.name }</Link>
                    )) }
                  </Box>
                </Box>
              </Flex>
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

  if (!posts) {
    return {
      notFound: true,
    }
  }

  let pageContent: {
    featured: PostOrPage,
    posts: PostOrPage[]
  } = {
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