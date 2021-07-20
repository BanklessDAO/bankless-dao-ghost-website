import Head from 'next/head';
import { Container, Button, Box, Text, Flex, Heading, Link, SimpleGrid, Image, chakra } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getPosts } from '../lib/posts';
import { getPages } from '../lib/pages';
import { PostOrPage, Tag, Author } from '../lib/types/ghost-types';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubscribeSection from '../components/SubscribeSection';

type HomeProps = {
  featuredPages: PostOrPage[],
  featured: PostOrPage,
  posts: PostOrPage[]
};

export default function Home({ featuredPages, featured, posts }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container maxW="container.xl" px="6%">
        <SimpleGrid columns={2} rows={2} className="loop-wrap">
          {posts.map((post: PostOrPage, index: number) => {
            if (index == 0) {
              return (
                <Box
                  className="item is-hero is-first is-image"
                  as="article"
                  key={post.id}
                  color="white"
                  width="100%"
                  marginTop="12vh"
                  paddingTop="0"
                  paddingBottom="0"
                  gridColumn="span 2"
                >
                  <Flex
                    className="item-container global-color"
                    position="relative"
                    maxW="100%"
                    boxSizing="border-box"
                    sx={{
                      _before: {
                        base: {
                          ".item.is-hero.is-image &": {
                            maxW: "491px"
                          },
                          ".item.is-hero &": {
                            position: "absolute",
                            width: "100%",
                            content: "''",
                            zIndex: "-2",
                            top: "-6vh",
                            right: "0",
                            bottom: "-4vh",
                            maxW: "59.7%",
                            background: "radial-gradient(white 6%, transparent 0)",
                            backgroundSize: "28px 28px"
                          }
                        }
                      },
                      _after: {
                        base: {
                          content: '""',
                          background: "#ff4a97",
                          width: "100%",
                          position: "absolute",
                          ".item.is-hero &": {
                            zIndex: "-3",
                            top: "-7vh",
                            right: "70px",
                            bottom: "4vh",
                            maxW: "calc(59.7% - 65px)"
                          },
                          ".item.is-hero.is-image &": {
                            maxW: "427px"
                          }
                        }
                      }
                    }}
                  >
                    <Link
                      className="item-image global-image global-color"
                      href={`${post.slug}`}
                    >
                      <Image
                        loading="lazy"
                        objectFit="cover"
                        src="https://via.placeholder.com/500"
                        alt="placeholder image" />
                    </Link>
                    <Box
                      className="item-content"
                      width="100%"
                      padding="0"
                      paddingRight="5%"
                      willChange="transfrom"
                    >
                      <Text className="global-meta">
                        A long time ago by {post.primary_author.name} - {post.reading_time} minutes
                      </Text>
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
                          {post.title}
                        </Link>
                      </Heading>
                      <Text fontFamily="one" fontWeight="500" fontSize="13px" isTruncated>
                        {post.excerpt}
                      </Text>
                      <Box className="global-tags">
                        {post.tags.map((tag: Tag) => (
                          <Link
                            key={tag.id}
                            textTransform="lowercase"
                            textDecoration="none"
                          >#{tag.name}</Link>
                        ))}
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
                    {post.visibility !== 'public' && (<chakra.span className="global-members-label" display="block">{post.visibility}</chakra.span>)}
                    <Box
                      className="item-content"
                      width="100%"
                      padding="10px 0 10px 5%"
                    >
                      <Link
                        className="item-image global-image"
                        href={`/${post.slug}`}
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
                          alt="placeholder image" />
                      </Link>
                      <Heading
                        as="h2"
                        fontSize="24px"
                        fontFamily="one"
                        width="calc(93% - 125px)"
                      >
                        <Link
                          className="global-underline"
                          href={`/${post.slug}`}
                          textDecoration="none"
                        >
                          {post.title}
                        </Link>
                      </Heading>
                      <Text className="global-meta">
                        {post.primary_author.name}
                      </Text>
                      {post.excerpt && <Text fontFamily="one" fontWeight="500" fontSize="13px" isTruncated>
                        {post.excerpt}
                      </Text>
                      }
                      <Box className="global-tags">
                        {post.tags.map((tag: Tag) => (
                          <Link
                            key={tag.id}
                            textTransform="lowercase"
                            textDecoration="none"
                            href={`/${tag.slug}`}
                          >#{tag.name}</Link>
                        ))}
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              )
            }
          }
          )}

        </SimpleGrid>
        <Box className="pagination-section"
          margin="10vh auto 15vh" textAlign="center">
          <Link href="/page/2/" id="next-page" display="none" />
          <Button variant="loadMore" aria-label="Load more" display="inline-block"></Button>
        </Box>
        <SubscribeSection />
        <Footer />
      </Container>
    </div>
  )
}


export async function getStaticProps(context: GetStaticProps) {
  const posts = await getPosts();
  const pages = await getPages();

  if (!posts) {
    return { props: { notFound: true } }
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