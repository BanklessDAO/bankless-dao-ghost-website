import { Heading, Text, Box, Flex, chakra } from '@chakra-ui/react';
import Link from './Link';
import { PostOrPage, Author, Tag } from '@tryghost/content-api';

type PinnedPagesProps = {
  relatedPages: PostOrPage[];
};

export default function RelatedPosts({ relatedPages }: PinnedPagesProps) {
  return (
    <Flex
      className="post-related global-special"
      position="relative"
      borderTop="4px solid var(--color-details)">
      <Heading as="h2">
        <chakra.span>You might also like</chakra.span>
      </Heading>
      {relatedPages.map((page: PostOrPage, i: number) => {
        if (i == 0) {
          return (
            <Box key={page.id} as="article" className="is-first">
              <Heading as="h3">
                <Link key={page.id} href={`/${page.slug}`} className="global-underline">
                  {page.title}
                </Link>
              </Heading>
              {page.authors && (
                <Box className="global-meta">
                  {page.authors.map((author: Author) => (
                    <Link key={author.id} href="#">
                      {author.name}
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          );
        } else {
          return (
            <Box key={page.id} as="article">
              <Heading as="h3">
                <Link key={page.id} href={`/${page.slug}`} className="global-underline">
                  {page.title}
                </Link>
              </Heading>
              {page.authors && (
                <Box className="global-meta">
                  {page.authors.map((author: Author) => (
                    <Link key={author.id} href="#">
                      {author.name}
                    </Link>
                  ))}
                </Box>
              )}
            </Box>
          );
        }
      })}
    </Flex>
  );
}
