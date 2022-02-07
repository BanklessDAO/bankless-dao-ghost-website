// react & next imports
import { useState } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

// type imports
import { Tag, PostOrPage, Pagination } from '@tryghost/content-api';

// lib imports
import { getAllTags, getTagBySlug, Tags } from '../../lib/tags';

import { getPaginatedPostsByTag } from '../../lib/posts';
import { PostsOrPages } from '../../lib/pages';

// util imports
import debounce from '../../util/debounce';

// component imports
import { Flex, Box, Button } from '@chakra-ui/react';
import AnalyticsEventTracker from '../../components/AnalyticsEventTracker';
import GuildTag from '../../components/GuildTag';
import MainArticle from '../../components/MainArticle';
import SubArticle from '../../components/SubArticle';
import SubscribeSection from '../../components/SubscribeSection';

// PostPage page component
const PostsByTag = ({
  tag,
  posts: initialPosts,
  pagination: initialPagination,
}: any) => {
  // Render post title and content in the page from props

  const [pagination, setPagination] = useState<Pagination>(initialPagination);
  const [posts, setPosts] = useState<PostOrPage[]>(initialPosts);
  const handleLoadMoreClick = async () => {
    const newPosts = await getPaginatedPostsByTag(tag.name, pagination.next!);
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setPagination(newPosts.meta.pagination);
  };

  return (
    <>
      <Head>
        <title>Tags</title>
        <meta name="description" content="Posts by tag" />
      </Head>
      <Flex justifyContent="center">
        <GuildTag variant="secondary" guild={tag} tagLevel={true} />
      </Flex>
      <Flex className="loop-wrap">
        {posts &&
          posts.map((post: PostOrPage, index: number) => {
            const Article = index % 5 === 0 ? MainArticle : SubArticle;
            return <Article key={post.id} post={post} index={index} />;
          })}
      </Flex>
      {pagination && pagination.next && (
        <Box className="pagination-section">
          <Box className="pagination-wrap">
            <Button
              disabled={!pagination.next}
              onClick={debounce(handleLoadMoreClick, 400)}
              variant="loadMore"
              aria-label="Load more"
              display="inline-block"
            />
          </Box>
        </Box>
      )}
      <SubscribeSection />
      <AnalyticsEventTracker
        events={[{
          eventType: "view",
          eventName: "VIEWED_PAGE",
          data: {
            pageTitle: "GUILD_PAGE",
            guild: tag.name
          }
        }]} />
    </>
  );
};

export default PostsByTag;

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: Tag[] | null = await getAllTags();

  const tagRoutes = (tags as Tags).map((tag) => ({
    params: { slug: tag.slug },
  }));

  const paths = [...tagRoutes];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let posts: PostsOrPages | null = null;
  let tag: Tag | null = null;

  let slug: any = params!.slug;

  tag = await getTagBySlug(slug);
  posts = await getPaginatedPostsByTag(slug);

  if (!posts) posts = null;

  if (!tag) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tag,
      pagination: posts!.meta.pagination,
      posts,
    },
  };
};
