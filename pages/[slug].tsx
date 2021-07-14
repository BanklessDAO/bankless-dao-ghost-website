// pages/posts/[slug].js
import { getSinglePost, getPosts } from '../lib/posts';
// import Header from '../../components/Header';
import { Link, Flex, Box, Heading, Container, Text, Image, chakra } from '@chakra-ui/react';
import { PostOrPage } from '../lib/types/ghost-types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

// PostPage page component
const PostPage = ({ post }: { post: PostOrPage}) => {
  // Render post title and content in the page from props
  return (
    <>
      <Head>
        <title>{ post.title }</title>
        <meta name="description" content={ post.excerpt } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container color="white" maxW="100%" px="6%" className="test">
        <Navbar />
        <chakra.article maxW="1200px" mx="auto">
          <Box 
            className="post-header" 
            flexBasis="100%" 
            maxWidth="100%" 
            padding="50px 0"
            minHeight="45vh" 
            marginTop="3vh" 
            marginBottom="8vh"
            position="relative">
              <Flex sx={{
                  _before: {
                      content: '" "',
                      backgroundSize: "28px 28px",
                      maxW: "375px",
                      width: "100%",
                      position:"absolute",
                      zIndex: "-2",
                      right: "0",
                      top: "7vh",
                      bottom: "-4vh",
                      backgroundImage: "radial-gradient(white 6%, transparent 0)",
                  },
                  _after: {
                      content: '" "',
                      width: "314px",
                      position:"absolute",
                      bg: "#ff4a97",
                      top: {
                        base: "7vh",
                        lg: "-4vh"
                      },
                      right: "67px",
                      bottom: "3vh",
                      maxW: "calc(59.7% - 65px)",
                      zIndex: "-3"
                  }
              }} 
              boxSizing="border-box"
              className="postHeader" 
              maxW="100%"
              marginBottom="8vh"
              marginTop="3vh"
              mx="auto"
              padding="50px 0"
              flex="1 0 50%"
              flex-basis="100%"
              max-width="100%"
              >
                  <Box 
                    className=".itemImage" 
                    order={2} 
                    height="100%" 
                    alignSelf="flex-start"
                    flex=" 0 0 350px">

                      <Image 
                        src={ post.feature_image } 
                        alt="image of publishing options" 
                        width="100%"
                        height="100%"
                        objectFit="cover"/>

                  </Box>
                  <Box className=".itemContent" transform="translateY(-4vh)" paddingRight="5%" width="100%">
                      <Text 
                        marginBottom="2vh"
                        width="100%"
                        position="relative"
                        fontSize="13px" 
                        className="itemMeta">A year ago by Authors - { post.reading_time} minutes</Text>
                      <Heading 
                        as="h2" 
                        fontSize="55px" 
                        lineHeight="1.3" 
                        maxW="1000px" 
                        margin="0 0 2vh -2vh"
                        letterSpacing="-.5px"
                        marginBlockStart="0.83em"
                        marginBlockEnd="0.83em"
                        marginInlineStart="0px"
                        marginInlineEnd="0px">{ post.title }</Heading>
                      <Text 
                        maxW="380px"
                        paddingTop="15px"
                        paddingBottom="5px" 
                        lineHeight="1.7" 
                        fontSize="14px">{ post.excerpt }</Text>
                      { post.tags.map((tag: any) => (
                          <Text key={tag.id} textTransform="lowercase">#{tag.name}</Text>
                      ))}
                  </Box>
              </Flex>
          </Box>
          <Box className="postContent" dangerouslySetInnerHTML={{ __html: post.html}} maxW="700px" margin="0 auto 15vh"></Box>
          <Box height="300px" width="100%"></Box>
          <Box height="300px" width="100%"></Box>
          <Box height="300px" width="100%"></Box>
          <Box height="300px" width="100%"></Box>
          <Box height="300px" width="100%"></Box>
        </chakra.article>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: any = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export const getStaticProps: GetStaticProps = async (context: any) => {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post }
  }
}

export default PostPage;