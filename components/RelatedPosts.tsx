import { Heading, Text, Box, Flex, Link } from "@chakra-ui/layout";
import { PostOrPage, Author, Tag } from '../lib/types/ghost-types';

type PinnedPagesProps = {
    relatedPages: PostOrPage[]
}

export default function RelatedPosts({ relatedPages }: PinnedPagesProps) {
    return (
        <Flex className="global-special">
            <Heading as="h2">You might also like</Heading>
            {relatedPages.map((page: PostOrPage, i: number) => {
                if (i == 0) {
                    return (<Box key={page.id} as="article" className="is-first">
                        <Heading as="h3">{page.title}</Heading>
                        {page.authors && <Box className="global-meta">
                            {page.authors.map((author: Author) => (<Link key={author.id} href="#">{author.name}</Link>))}
                        </Box>}
                    </Box>);
                } else {
                    return (<Box key={page.id} as="article">
                        <Heading as="h3">{page.title}</Heading>
                        {page.authors && <Box className="global-meta">
                            {page.authors.map((author: Author) => (<Link key={author.id} href="#">{author.name}</Link>))}
                        </Box>}
                    </Box>);
                }
            })}
        </Flex>
    );
}

