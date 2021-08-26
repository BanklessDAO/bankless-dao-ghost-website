import { Box, Flex, Link, Image, Heading, Text } from '@chakra-ui/react';
import { PostOrPage, Tag } from '../lib/types/ghost-types';

type SubArticleProps = {
  post: PostOrPage,
  index: number
}

const SubArticle = ({ post, index }: SubArticleProps) => {
  return (
    <Box
      as="article"
      key={post.id}
      className={`item is-image post ${index % 2 !== 0 ? 'is-even' : 'is-odd'}`}
    >
      <Flex className="item-container">
        <Box className="item-content">
          <Link className="item-image global-image" href={`/${post.slug}`}>
            <Image
              loading="lazy"
              src={post.feature_image}
              alt="placeholder image" />
          </Link>
          <Heading as="h2" className="item-title">
            <Link className="global-underline" href={`/${post.slug}`} textDecoration="none">{post.title}</Link>
          </Heading>
          <Text className="global-meta">
            {post.primary_author.name}
          </Text>
          {post.excerpt && <Text className="item-excerpt" fontFamily="one" fontWeight="500" fontSize="13px">
            {post.excerpt}
          </Text>
          }
          <Box className="global-tags">
            {post.tags.map((tag: Tag) => (
              <Link
                key={tag.id}
                textTransform="lowercase"
                textDecoration="none"
                href={`/${tag.slug}`}
              >#{tag.name}</Link>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default SubArticle
