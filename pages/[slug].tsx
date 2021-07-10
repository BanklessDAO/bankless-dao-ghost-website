// pages/posts/[slug].js
import { getSinglePost, getPosts } from '../lib/posts';
// import Header from '../../components/Header';
import { Link, Flex, Box, Heading, Container, Text, Image } from '@chakra-ui/react';

// PostPage page component
const PostPage = ({ post }) => {
  // Render post title and content in the page from props
  return (
    <Container color="white" maxW="100%" px="6%" className="test">
        <Box className="post-header" flexBasis="100%" maxWidth="100%" padding="50px 0" marginTop="3vh">
            <Flex sx={{
                _before: {
                    content: '" "',
                    backgroundSize: "28px 28px",
                    maxW: "59.7%",
                    width: "100%",
                    position:"absolute",
                    zIndex: "-2",
                    right: "0",
                    top: "6vh",
                    bottom: "175vh",
                    backgroundImage: "radial-gradient(white 6%, transparent 0)",
                },
                _after: {
                    content: '" "',
                    width: "100%",
                    position:"absolute",
                    bg: "#ff4a97",
                    top: "7vh",
                    right: "70px",
                    bottom: "175vh",
                    maxW: "calc(59.7% - 65px)",
                    zIndex: "-3"
                }
            }} boxSizing="border-box"
            className="postHeader" maxW="100%" maxH="45vh">
                <Box className=".itemImage" order={2} height="100%">
                    <Image src={ post.feature_image } alt="image of publishing options" width="290px"/>
                </Box>
                <Box className=".itemContent" transform="translateY(-4vh)" paddingRight="5%">
                    <Text marginBottom="2vh">A year ago by Authors - { post.reading_time} minutes</Text>
                    <Heading as="h1" fontSize="55px" lineHeight="1.3" maxW="1000px" margin="0 0 2vh -2vh">{ post.title }</Heading>
                    <Text maxW="380px" lineHeight="1.7" fontSize="14px">{ post.excerpt }</Text>
                    { post.tags.map((tag) => (
                        <Text key={tag.id} textTransform="lowercase">#{tag.name}</Text>
                    ))}
                </Box>
            </Flex>
        </Box>
        <Box className="postContent" dangerouslySetInnerHTML={{ __html: post.html}} maxW="700px" margin="0 auto 15vh"></Box>
        
    </Container>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug)

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