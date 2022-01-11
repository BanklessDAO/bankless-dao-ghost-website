import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import { PostOrPage, Tag } from '@tryghost/content-api';
import { urlForPost } from '../lib/posts';
import { urlForTag } from '../lib/tags';

import AnalyticsEventTracker from './AnalyticsEventTracker';
import Link from './Link';

type SubArticleProps = {
  post: PostOrPage;
  index: number;
};

const SubArticle = ({ post, index }: SubArticleProps) => {
  return (
    <Box
      as="article"
      className={`item is-image post ${index % 2 !== 0 ? 'is-even' : 'is-odd'}`}
      maxW={{ sm: '100%', md: '100%', lg: '50%' }}
    >
      <Flex className="item-container">
        <Box className="item-content">
          <Link
            style={{ boxShadow: 'none' }}
            className="item-image global-image"
            href={urlForPost(post)}
            w={{ sm: '100%', md: '100%', lg: '95px' }}
          >
            <Image
              loading="lazy"
              src={post.feature_image!}
              alt="placeholder image"
            />
          </Link>
          <Heading as="h2" className="item-title">
            <AnalyticsEventTracker
              events={[{
                eventType: "click",
                eventName: "CLICK_ARTICLE",
                data: {
                  link: urlForPost(post),
                  title: post.title
                }
              }]}>
              <Link
                style={{ boxShadow: 'none' }}
                className="global-underline"
                href={urlForPost(post)}
                textDecoration="none">
                {post.title}
              </Link>
            </AnalyticsEventTracker>
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

export default SubArticle;
