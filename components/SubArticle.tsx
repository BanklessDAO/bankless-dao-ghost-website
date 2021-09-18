import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import { PostOrPage, Tag } from '@tryghost/content-api';
import Link from './Link';

type SubArticleProps = {
  post: PostOrPage;
  index: number;
};

const SubArticle = ({ post, index }: SubArticleProps) => {
  return (
    <Box
      as="article"
      className={`item is-image post ${
        index % 2 !== 0 ? 'is-even' : 'is-odd'
      }`}>
      <Flex className="item-container">
        <Box className="item-content">
          <Link
            style={{ boxShadow: 'none' }}
            className="item-image global-image"
            href={`/${post.slug}`}>
            <Image
              loading="lazy"
              src={post.feature_image!}
              alt="placeholder image"
            />
          </Link>
          <Heading as="h2" className="item-title">
            <Link
              style={{ boxShadow: 'none' }}
              className="global-underline"
              href={`/${post.slug}`}
              textDecoration="none">
              {post.title}
            </Link>
          </Heading>
          <Text className="global-meta">{post.primary_author!.name}</Text>
          {post.excerpt && (
            <Text
              className="item-excerpt"
              fontFamily="spartan"
              fontWeight="500"
              fontSize="13px">
              {post.excerpt}
            </Text>
          )}
          <Box className="global-tags">
            {post.tags!.map((tag: Tag) => (
              <Link
                key={tag.id}
                textTransform="lowercase"
                textDecoration="none"
                href={`tag/${tag.slug}`}>
                #{tag.name}
              </Link>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubArticle;
