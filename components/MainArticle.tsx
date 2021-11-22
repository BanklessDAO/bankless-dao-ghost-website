import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import { PostOrPage, Tag } from '@tryghost/content-api';
import { urlForPost } from '../lib/posts';
import { urlForTag } from '../lib/tags';
import Link from './Link';

type MainArticleProps = {
  post: PostOrPage;
  index: number;
};

const MainArticle = ({ post, index }: MainArticleProps) => {
  return (
    <Box as="article" className="item is-hero is-first is-image">
      <Flex
        className="item-container global-color"
        flexDirection={{ sm: 'column', md: 'column-reverse', lg: 'row' }}
      >
        <Link
          className="item-image global-image global-color"
          style={{ boxShadow: 'none' }}
          href={urlForPost(post)}>
          <Image
            loading="lazy"
            objectFit="cover"
            src={post.feature_image!}
            alt={post.title}
          />
        </Link>
        <Box
          className="item-content"
          width="100%"
          padding="0"
          paddingRight="5%"
          willChange="transfrom">
          <Text className="global-meta">
            A long time ago by {post.primary_author!.name} - {post.reading_time}{' '}
            minutes
          </Text>
          <Heading as="h2" className="item is-hero item-title">
            <Link
              className="global-underline"
              style={{ boxShadow: 'none' }}
              textDecoration="none"
              href={urlForPost(post)}>
              {post.title}
            </Link>
          </Heading>
          <Text className="is-hero item-excerpt">{post.excerpt}</Text>
          <Box className="global-tags">
            {post.tags!.map((tag: Tag) => (
              <Link
                key={tag.id}
                textTransform="lowercase"
                textDecoration="none"
                href={urlForTag(tag)}>
                #{tag.name}
              </Link>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainArticle;
