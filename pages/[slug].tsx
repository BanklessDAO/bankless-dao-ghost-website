// pages/posts/[slug].js
import {
  getSinglePost,
  getPosts,
  getPostsWithTag,
  getAllPosts,
  getNewerPost,
  getOlderPost,
} from '../lib/posts';
import { getSinglePage, getPages, PostsOrPages } from '../lib/pages';
import { PostOrPage } from '@tryghost/content-api';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Page from '../components/Page';
import Post from '../components/Post';

// PostPage page component
const PostPage = ({ cmsData }: any) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  const { isPost } = cmsData;

  if (isPost) {
    return <Post cmsData={cmsData} />;
  } else {
    return <Page cmsData={cmsData} />;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostOrPage[] = await getAllPosts();
  const pages: PostOrPage[] = await getPages();

  // Get the paths we want to create based on posts
  const postRoutes = posts.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));

  // Get the pages we want to create based on pages
  const pageRoutes = (pages as PostsOrPages)
    .filter((page) => page.slug !== 'guilds')
    .map((page) => ({ params: { slug: page.slug } }));

  const paths = [...postRoutes, ...pageRoutes];

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
};

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug: any = params!.slug;

  let post: any = null;
  let page: any = null;

  post = await getSinglePost(slug);

  const isPost = !!post;
  let relatedPosts: PostOrPage[] | never[] = [];

  if (!isPost) {
    page = await getSinglePage(slug);
  } else if (post?.primary_tag) {
    relatedPosts = await getPostsWithTag(post?.tags);
  } else {
    var { published_at } = post;
  }

  let newerPost: PostOrPage = await getNewerPost(published_at);
  let olderPost: PostOrPage = await getOlderPost(published_at);

  if (!post && !page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cmsData: {
        post,
        page,
        isPost,
        relatedPosts,
        newerPost,
        olderPost,
      },
    },
  };
};

export default PostPage;
