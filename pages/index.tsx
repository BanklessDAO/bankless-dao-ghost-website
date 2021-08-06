import Head from 'next/head';
import { Container, Button, Box, Text, Flex, Heading, Link, SimpleGrid, Image, chakra } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getFeaturedPosts, getPosts } from '../lib/posts';
import { getFeaturedPages, getPages } from '../lib/pages';
import { PostOrPage, Tag, Author } from '../lib/types/ghost-types';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubscribeSection from '../components/SubscribeSection';
import PinnedSection from '../components/PinnedSection';

type HomeProps = {
  featuredPages: PostOrPage[],
  featuredPosts: PostOrPage[],
  pages: PostOrPage[],
  posts: PostOrPage[]
};

export default function Home({ featuredPosts, featuredPages, posts, pages }: HomeProps) {
  return (
    <>
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PinnedSection featuredPages={featuredPages} featuredPosts={featuredPosts} />
      <Flex className="loop-wrap">
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
                <Flex className="item-container global-color">
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
                    <Heading as="h2" className="item-title">
                      <Link
                        className="global-underline"
                        href={`${post.slug}`}
                        textDecoration="none"
                      >
                        {post.title}
                      </Link>
                    </Heading>
                    <Text className="item-excerpt">
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
                className={["item is-image post", index % 2 == 0 ? 'is-even' : 'is-odd',].join(' ')}
              >
                <Flex className="item-container">
                  {post.visibility !== 'public' && (<chakra.span className="global-members-label" display="block">{post.visibility}</chakra.span>)}
                  <Box className="item-content">
                    <Link className="item-image global-image" href={`/${post.slug}`}>
                      <Image
                        loading="lazy"
                        src="https://via.placeholder.com/260"
                        alt="placeholder image" />
                    </Link>
                    <Heading as="h2" className="item-title">
                      <Link className="global-underline" href={`/${post.slug}`} textDecoration="none">{post.title}</Link>
                    </Heading>
                    <Text className="global-meta">
                      {post.primary_author.name}
                    </Text>
                    {post.excerpt && <Text fontFamily="one" fontWeight="500" fontSize="13px">
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

      </Flex>
      <Box className="pagination-section"
        margin="10vh auto 15vh" textAlign="center">
        <Link href="/page/2/" id="next-page" display="none" />
        <Button variant="loadMore" aria-label="Load more" display="inline-block"></Button>
      </Box>
      <SubscribeSection />
      <Footer />
    </>
  )
}


export async function getStaticProps(context: GetStaticProps) {
  const posts = await getPosts();
  const pages = await getPages();
  const featuredPages = await getFeaturedPages();
  const featuredPosts = await getFeaturedPosts();

  if (!posts) {
    return { props: { notFound: true } }
  }

  return {
    props: {
      posts,
      pages,
      featuredPages,
      featuredPosts
    }
  }

}