import { Heading, Text, Box, Flex, Link } from "@chakra-ui/layout";
import { PostOrPage, Author, Tag } from '../lib/types/ghost-types';
import PinnedPostOrPage from './PinnedPostsOrPage';


type PinnedSectionProps = {
    featuredPages: PostOrPage[],
    featuredPosts: PostOrPage[]
};

export default function PinnedSection({ featuredPages, featuredPosts }: PinnedSectionProps) {
    return (
        <Flex
            className="pinned-section"
            flexWrap={{
                base: "wrap"
            }}>
            <PinnedPostOrPage postsOrPages={featuredPages} className="pinned-pages" title="Announcements" />
            <PinnedPostOrPage postsOrPages={featuredPosts} className="pinned-pots" title="Don't miss it" />
        </Flex>
    );
}

