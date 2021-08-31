// pages/posts/[slug].js
import { getSinglePost, getPosts, getPostsWithTag, getNewerPost, getOlderPost } from '../lib/posts';
import {
  getSinglePage,
  getPages
} from '../lib/pages';
// import Header from '../../components/Header';
import { Link, Flex, Box, Heading, Container, Text, Image, chakra } from '@chakra-ui/react';
import { Author, PostOrPage } from '../lib/types/ghost-types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubscribeSection from '../components/SubscribeSection';
import RelatedPosts from '../components/RelatedPosts';
import { Tag } from '../lib/types/ghost-types';
import ShareLinks from '../components/ShareLinks';
import NextPrevSection from '../components/NextPrevPost';
import Page from '../components/Page';

type PostPageProps = {
  post: PostOrPage,
  relatedPosts: PostOrPage[],
  newerPost: {
    title: string,
    feature_image: string,
    feature_image_alt: string,
    slug: string
  }[],
  olderPost: {
    title: string,
    feature_image: string,
    feature_image_alt: string,
    slug: string
  }[]
};

// PostPage page component
const PostPage = ({ cmsData }: any) => {

  console.log("cmsData: ", cmsData);

  const router = useRouter();
  if(router.isFallback) return <div>Loading...</div>;

  const { isPost } = cmsData;

  if (isPost) {
    return <Box>A Post</Box>;
  } else {
    return <Page cmsData={cmsData} />
  }

  // // Render post title and content in the page from props
  // return (
  //   <>
  //     <Head>
  //       <title>{post.title}</title>
  //       <meta name="description" content={post.excerpt} />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <Container maxW="100%" px="6%" className="test" overflow="auto">
  //       <Navbar />
  //       <chakra.article maxW="1200px" mx="auto">
  //         <Box
  //           className="post-header item is-hero is-image"
  //           flexBasis="100%"
  //           maxWidth="100%"
  //           padding="50px 0"
  //           minHeight="45vh"
  //           marginTop="10vh"
  //           marginBottom="8vh"
  //           position="relative">
  //           <Flex sx={{
  //             _before: {
  //               base: {
  //                 ".item.is-hero.is-image &": {
  //                   maxW: "491px"
  //                 },
  //                 ".item.is-hero &": {
  //                   position: "absolute",
  //                   width: "100%",
  //                   content: "''",
  //                   zIndex: "-2",
  //                   top: "-6vh",
  //                   right: "0",
  //                   bottom: "-4vh",
  //                   maxW: "59.7%",
  //                   background: "radial-gradient(white 6%, transparent 0)",
  //                   backgroundSize: "28px 28px"
  //                 }
  //               }
  //             },
  //             _after: {
  //               base: {
  //                 content: '""',
  //                 background: "#ff4a97",
  //                 width: "100%",
  //                 position: "absolute",
  //                 ".item.is-hero &": {
  //                   zIndex: "-3",
  //                   top: "-7vh",
  //                   right: "70px",
  //                   bottom: "4vh",
  //                   maxW: "calc(59.7% - 65px)"
  //                 },
  //                 ".item.is-hero.is-image &": {
  //                   maxW: "427px"
  //                 }
  //               }
  //             }
  //           }}
  //             className="item-container global-color"
  //           >
  //             <Box className="item-image global-image global-color">
  //               <Image src={post.feature_image} alt="image of publishing options" />
  //             </Box>
  //             <Box
  //               className=".item-content"
  //               transform={{
  //                 base: "translateY(0)",
  //                 sm: "translateY(-4vh)"
  //               }}
  //               padding={{
  //                 base: "0",
  //               }}
  //               paddingRight="5%"
  //               width="100%"
  //             >
  //               <Text
  //                 marginBottom="2vh"
  //                 width="100%"
  //                 position="relative"
  //                 fontSize="13px"
  //                 className="item-meta">A year ago by Authors - {post.reading_time} minutes</Text>
  //               <Heading
  //                 as="h1"
  //                 fontSize={{
  //                   base: "30px",
  //                   lg: "65px",
  //                   xl: "23px"
  //                 }}
  //                 lineHeight="1.3"
  //                 maxW="1000px"
  //                 margin={{
  //                   base: "0 0 2vh -2px"
  //                 }}
  //                 marginTop="0px"
  //                 marginLeft="-4px"
  //                 letterSpacing="-.5px">{post.title}</Heading>
  //               <Text className="item-excerpt">{post.excerpt}</Text>
  //               <Box className="item-tags global-tags">
  //                 {post.tags.map((tag: any) => (
  //                   <Link key={tag.id} textTransform="lowercase">#{tag.name}</Link>
  //                 ))}
  //               </Box>
  //             </Box>
  //           </Flex>
  //         </Box>
  //         <Box
  //           className="postContent"
  //           dangerouslySetInnerHTML={{ __html: post.html }}
  //           maxW="700px"
  //           margin="0 auto"
  //         />
  //         <ShareLinks />
  //       </chakra.article>
  //       <RelatedPosts relatedPages={relatedPosts} />
  //       <NextPrevSection newerPost={newerPost[0] ? newerPost[0] : null} olderPost={olderPost[0] ? olderPost[0] : null} />
  //       <SubscribeSection />
  //       <Footer />
  //     </Container>
  //   </>
  // )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: PostOrPage[] = await getPosts();
  const pages: PostOrPage[] = await getPages();

  const contrib: PostOrPage[] = await getSinglePage('contribute');

  // Get the paths we want to create based on posts
  const postRoutes = posts.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));

  // Get the pages we want to create based on pages
  const pageRoutes = (pages as PostOrPage).map((page) => ({
    params: { slug: page.slug }
  }));

  const paths = [...postRoutes, ...pageRoutes];

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export const getStaticProps: GetStaticProps = async ({ params }) => {

  let post: PostOrPage | null = null;
  let page: PostOrPage | null = null;

  post = await getSinglePost(params.slug);
  const isPost = !!post;
  let relatedPosts: PostOrPage[] | never[] = [];

  if (!isPost) {
    page = await getSinglePage(params.slug);
  } else if(post?.primary_tag) {
    relatedPosts = await getPostsWithTag(post?.primary_tag);
  } else {
    var { published_at } = post;
  }

  let newerPost: PostOrPage = await getNewerPost(published_at);
  let olderPost: PostOrPage = await getOlderPost(published_at);

  if (!post && !page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cmsData:{
        post,
        page,
        isPost,
        relatedPosts,
        newerPost,
        olderPost
      }
    }
  }

}

export default PostPage;