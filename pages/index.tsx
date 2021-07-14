import Head from 'next/head';
import { Container, Box, Text, Flex, Heading, Link, SimpleGrid, Image, chakra } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';
import { getPages } from '../lib/pages';
import { PostOrPage, Tag, Author } from '../lib/types/ghost-types';

import Navbar from '../components/Navbar';

type HomeProps = {
  featuredPages: PostOrPage[],
  featured: PostOrPage,
  posts: PostOrPage[]
};

export default function Home({ featuredPages, featured, posts }: HomeProps) {

      <Container maxW="100%" px="6%">
        <Navbar />
        <SimpleGrid columns={2} rows={2}>
          { posts.map((post: PostOrPage, index: number) => {
              if(index == 0) {
                return (
                    <Box 
                      className="is-hero is-first"
                      as="article" 
                      key={post.id} 
                      color="white"
                      paddingRight="35px"
                      paddingLeft="60px"
                      width="100%"
                      marginTop="12vh"
                      paddingTop="0"
                      paddingBottom="0"
                      gridColumn="span 2"
                    >
                      <Flex 
                        className="item-container"
                        position="relative"
                        maxW="100%"
                        boxSizing="border-box"
                        flexDir="column"
                        >
                        <Box 
                          className="item-content"
                          width="100%"
                          padding="0"
                          paddingRight="5%"
                          willChange="transfrom"
                          >
                          <Text className="global-meta">
                            A long time ago by { post.primary_author.name } - { post.reading_time } minutes
                          </Text>
                          <Link 
                            className="item-image global-image"
                            href={`${post.slug}`}
                            >
                            <Image 
                              loading="lazy"
                              objectFit="cover"
                              src="https://via.placeholder.com/500" 
                              alt="placeholder image"/>
                          </Link>
                          <Heading 
                            as="h2" 
                            fontSize="65px"
                            maxW="1000px"
                            marginLeft="-4px" 
                            fontFamily="one"
                            >
                            <Link 
                              className="global-underline" 
                              href={`${post.slug}`} 
                              textDecoration="none"
                              >
                              { post.title }
                            </Link>
                          </Heading>
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
                ) 
              } else {
                return (
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
                      <Link 
                        className="item-image global-image"
                        href={`${post.slug}`}
                        _after={{
                          position: "absolute",
                          content: "''",
                          zIndex: "-1",
                          top: "-10px",
                          right: "10px",
                          bottom: "10px",
                          left: "-10px",
                          pointerEvents: "none",
                          background: "blue"
                        }}
                        >
                        <Image 
                          loading="lazy"
                          src="https://via.placeholder.com/260" 
                          alt="placeholder image"/>
                      </Link>
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
                )
              }
            }
          )}
        
        </SimpleGrid>
        <chakra.footer color="white" height="300px">
          A Footer!
        </chakra.footer>

      </Container>
    </div>
  )
}


export async function getStaticProps(context: GetStaticProps) {
  const posts = await getPosts();
  const pages = await getPages();

  if (!posts) {
    return !posts && { props: { notFound: true } }
  }

  posts.forEach((post: any) => {
    
  });
  

  return {
    props: {
      posts,
      pages,
    }
  }

}