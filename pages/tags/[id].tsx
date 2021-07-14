import Head from 'next/head';
import { Container } from '@chakra-ui/react';

// PostPage page component
const PostsByTag = () => {
  // Render post title and content in the page from props
  return (
    <>
      <Head>
        <title>Tags</title>
        <meta name="description" content="Posts by tag" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container color="white" maxW="100%" px="6%" className="test">
        A list of posts by tag
      </Container>
    </>
  )
}