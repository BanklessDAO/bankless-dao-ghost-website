import { useState } from 'react'
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Button, Box, Text, Flex, chakra } from '@chakra-ui/react';
import { PostOrPage, Pagination } from '@tryghost/content-api';
import { getFeaturedPosts, getPaginatedPosts } from '../lib/posts';
import { getFeaturedPages } from '../lib/pages';

import debounce from '../util/debounce';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainArticle from '../components/MainArticle';
import SubArticle from '../components/SubArticle';
import SubscribeSection from '../components/SubscribeSection';
import PinnedSection from '../components/PinnedSection';

export default function Home({ featuredPosts, featuredPages, posts: initialPosts, pagination: initialPagination }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [pagination, setPagination] = useState<Pagination>(initialPagination)
  const [posts, setPosts] = useState<PostOrPage[]>(initialPosts)
  const handleLoadMoreClick = async () => {
    const newPosts = await getPaginatedPosts(pagination.next)
    setPosts((prevPosts) => [...prevPosts, ...newPosts])
    setPagination(newPosts.meta.pagination)
  }
  return (
    <>
      <Head>
        <title>Bankless DAO</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <chakra.main className="global-main">
        <PinnedSection featuredPages={featuredPages} featuredPosts={featuredPosts} />
        <Flex className="loop-wrap">
          {posts.map((post: PostOrPage, index: number) => {
            const Article = index === 0 ? MainArticle : SubArticle
            return <Article key={post.id} post={post} index={index} />
          }
          )}
        </Flex>
        {pagination.next && (
          <Box className="pagination-section">
            <Box className="pagination-wrap">
              <Button disabled={!pagination.next} onClick={debounce(handleLoadMoreClick, 400)} variant="loadMore" aria-label="Load more" display="inline-block" />
            </Box>
          </Box>
        )}
        <SubscribeSection />
      </chakra.main>
      <Footer />
    </>
  )
}


export async function getStaticProps(context: GetStaticProps) {
  const posts = await getPaginatedPosts(1);
  const featuredPages = await getFeaturedPages();
  const featuredPosts = await getFeaturedPosts();

  if (!posts) {
    return { props: { notFound: true } }
  }

  return {
    props: {
      pagination: posts.meta.pagination,
      posts,
      featuredPages,
      featuredPosts
    }
  }
}