// next imports
import Head from 'next/head';

// chakra imports
import { chakra, Box, Flex, Image, Heading, Text } from '@chakra-ui/react';

// type imports
import { PostOrPage } from '@tryghost/content-api';

// component imports
import Link from './Link';
import ShareLinks from './ShareLinks';
import RelatedPosts from './RelatedPosts';
import NextPrevSection from './NextPrevPost';
import SubscribeSection from './SubscribeSection';

export interface PostOrPageProps {
  cmsData: {
    post: PostOrPage;
    page: PostOrPage;
    isPost: boolean;
    relatedPosts: PostOrPage[];
    newerPost: any;
    olderPost: any;
  };
}

export default function Post({ cmsData }: PostOrPageProps): JSX.Element {
  const { post, relatedPosts, newerPost, olderPost } = cmsData;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <chakra.article maxW="1200px" mx="auto">
        <Box
          className="post-header item is-hero is-image"
          flexBasis="100%"
          maxWidth="100%"
          padding="50px 0"
          minHeight="45vh"
          marginTop="10vh"
          marginBottom="8vh"
          position="relative">
          <Flex className="item-container global-color">
            <Box className="item-image global-image global-color">
              <Image
                src={post.feature_image!}
                alt="image of publishing options"
              />
            </Box>
            <Box
              className=".item-content"
              transform={{
                sm: 'translateY(0)',
                md: 'translateY(-4vh)',
              }}
              padding={{
                base: '0',
              }}
              paddingRight="5%"
              width="100%">
              <Text
                marginBottom="2vh"
                width="100%"
                position="relative"
                fontSize="13px"
                className="item-meta">
                A year ago by Authors - {post.reading_time} minutes
              </Text>
              <Heading
                as="h1"
                fontSize={{
                  base: '30px',
                  lg: '65px',
                  xl: '23px',
                }}
                lineHeight="1.3"
                maxW="1000px"
                margin={{
                  base: '0 0 2vh -2px',
                }}
                marginTop="0px"
                marginLeft="-4px"
                letterSpacing="-.5px">
                {post.title}
              </Heading>
              <Text className="item-excerpt">{post.excerpt}</Text>
              <Box className="item-tags global-tags">
                {post.tags!.map((tag: any) => (
                  <Link
                    key={tag.id}
                    textTransform="lowercase"
                    href={`tag/${tag.slug}`}>
                    #{tag.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box
          className="postContent"
          dangerouslySetInnerHTML={{ __html: post.html! }}
          sx={{
            '& a': {
              color: '#02bfe7',
              borderBottom: '1px solid #02bfe7',
            },
          }}
          maxW="700px"
          margin="0 auto"
        />
        <ShareLinks />
      </chakra.article>
      <RelatedPosts relatedPages={relatedPosts} />
      <NextPrevSection
        newerPost={newerPost[0] ? newerPost[0] : null}
        olderPost={olderPost[0] ? olderPost[0] : null}
      />
      <SubscribeSection />
    </>
  );
}
