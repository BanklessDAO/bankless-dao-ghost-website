// next imports
import Head from 'next/head';

// chakra imports
import {
  chakra,
  Container,
  Box,
  Flex,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';

import AnalyticsEventTracker from './AnalyticsEventTracker';

// Component definition.
export default function Page({ cmsData }: any): JSX.Element {
  const { page } = cmsData;

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.excerpt} />
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
                src={page.feature_image}
                alt="image of publishing options"
              />
            </Box>
            <Box
              className="item-content"
              transform={{ sm: 'translateY(0)', md: 'translateY(-4vh)' }}
              padding={{ base: '0' }}
              paddingRight="5%"
              width="100%">
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
                fontFamily="spartan"
                fontWeight={500}
                marginTop="0px"
                marginLeft="-4px"
                letterSpacing="-.5px">
                {page.title}
              </Heading>
              <Text className="item-excerpt">{page.excerpt}</Text>
            </Box>
          </Flex>
        </Box>
        <Box
          className="postContent"
          sx={{
            '& a': {
              color: '#02bfe7',
              borderBottom: '1px solid #02bfe7',
            },
          }}
          dangerouslySetInnerHTML={{ __html: page.html }}
          maxW="700px"
          margin="0 auto"
        />
      </chakra.article>
      <AnalyticsEventTracker
        events={[{
          eventType: "view",
          eventName: `VIEWED_PAGE`,
          data: {
            pageTitle: `${page.title}_PAGE`,
            title: page.title
          }
        }]} />
    </>
  );
}
