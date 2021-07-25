import { Heading, Text, Box, Flex, Link } from "@chakra-ui/layout";
import { PostOrPage, Author, Tag } from '../lib/types/ghost-types';

type PinnedPagesProps = {
    featuredPages: PostOrPage[]
}

export default function PinnedSection({ featuredPages }: PinnedPagesProps) {
    return (
        <Flex>
            <Heading as="h2" >
                Announcements
            </Heading>
            {featuredPages.map(page => {

                <Box as="article">
                    <Heading as="h3" className="global-underline">
                        <Link textDecoration="none" href={page.slug}>
                            {page.title}
                        </Link>
                    </Heading>
                </Box>
            })}
        </Flex>
    );
}

