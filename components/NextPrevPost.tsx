import { chakra, Flex, Image, Link, Heading } from '@chakra-ui/react';
import { PostOrPage } from '../lib/types/ghost-types';

type NextPrevSectionProps = {
  newerPost?: {
    feature_image: string;
    feature_image_alt: string;
    title: string;
    slug: string;
  } | null;
  olderPost?: {
    feature_image: string;
    feature_image_alt: string;
    title: string;
    slug: string;
  } | null;
};

const NextPrevSection = ({ newerPost, olderPost }: NextPrevSectionProps) => {
  return (
    <Flex
      as="aside"
      width="100%"
      margin="10vh auto 16vh"
      borderTop="var(--border) var(--color-three)"
      borderBottom="var(--border) var(--color-three)"
      height="200px">
      {newerPost && (
        <Flex
          as="section"
          boxSizing="border-box"
          margin="40px 0"
          flex="1 0 50%"
          paddingRight="20px">
          <Link
            href={newerPost.slug}
            marginRight="20px"
            marginLeft="10px"
            position="relative"
            transform="translateY(5px)"
            flex="0 0 120px"
            sx={{
              _after: {
                position: 'absolute',
                zIndex: '-1',
                top: '-10px',
                right: '10px',
                bottom: '10px',
                left: '-10px',
                content: "''",
                pointerEvents: 'none',
                background: 'rgb(30,39,50)',
              },
            }}>
            <Image
              src={newerPost.feature_image}
              alt={newerPost.feature_image_alt}
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              width="120px"
              minHeight="120px"
              objectFit="cover"
            />
          </Link>
          <chakra.div maxW="400px" alignSelf="center">
            <chakra.small fontFamily="mono" fontSize="13px" fontWeight="500">
              Newer post
            </chakra.small>
            <Heading
              as="h3"
              display="block"
              marginTop="10px"
              marginBottom="0"
              fontSize="18px">
              <Link href={newerPost.slug} className="global-underline">
                {newerPost.title}
              </Link>
            </Heading>
          </chakra.div>
        </Flex>
      )}
      {olderPost && (
        <Flex
          as="section"
          boxSizing="border-box"
          margin="40px 0"
          flex="1 0 50%"
          justifyContent="flex-end"
          paddingLeft="20px">
          <chakra.div maxW="400px" alignSelf="center">
            <chakra.small fontFamily="mono" fontSize="13px" fontWeight="500">
              Older post
            </chakra.small>
            <Heading
              as="h3"
              display="block"
              marginTop="10px"
              marginBottom="0"
              fontSize="18px">
              <Link href={olderPost.slug} className="global-underline">
                {olderPost.title}
              </Link>
            </Heading>
          </chakra.div>
          <Link
            href={olderPost.slug}
            marginRight="20px"
            marginLeft="10px"
            position="relative"
            transform="translateY(5px)"
            flex="0 0 120px"
            sx={{
              _after: {
                position: 'absolute',
                zIndex: '-1',
                top: '-10px',
                right: '10px',
                bottom: '10px',
                left: '-10px',
                content: "''",
                pointerEvents: 'none',
                background: '#fed672',
              },
            }}>
            <Image
              src={olderPost.feature_image}
              alt={olderPost.feature_image_alt}
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              width="120px"
              minHeight="120px"
              objectFit="cover"
            />
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default NextPrevSection;
