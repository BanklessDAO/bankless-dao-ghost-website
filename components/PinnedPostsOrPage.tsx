import { Heading, Text, Box, Flex, Link } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/react';
import { PostOrPage, Author, Tag } from '../lib/types/ghost-types';

type PinnedPostsProps = {
  postsOrPages: PostOrPage[];
  className: string;
  title: string;
};

export default function PinnedPosts({
  postsOrPages,
  className,
  title,
}: PinnedPostsProps) {
  return (
    <Flex className={className}>
      <Heading as="h2">
        <chakra.span>{title}</chakra.span>
      </Heading>
      {postsOrPages.map((postOrPage) => (
        <Box key={postOrPage.id} as="article">
          <Heading as="h3">
            <Link href={postOrPage.slug} className="global-underline">
              {postOrPage.title}
            </Link>
          </Heading>
          <Box className="global-meta">
            {postOrPage.authors?.map((author) => (
              <Link key={author.id} href={`/author/${author.name}`}>
                {author.name}
              </Link>
            ))}
          </Box>
        </Box>
      ))}
    </Flex>
  );
}
