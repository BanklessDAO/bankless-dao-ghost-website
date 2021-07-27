// import Header from '../../components/Header';
import { Link, Flex, chakra, Icon } from '@chakra-ui/react';
import { FaTwitter, FaFacebook, FaCopy } from 'react-icons/fa';

type PostPageProps = {
    post: PostOrPage,
    relatedPosts?: {
        title: string,
        authors: string[]
    }
};

// PostPage page component
const ShareLinks = () => {
    // Render post title and content in the page from props
    return (
        <chakra.div
            className="post-share-section"
            width="100%"
            paddingTop="40px"
            marginBottom="15vh"
        >
            <Flex
                position="relative"
                display="inline-flex"
                width="100%"
                justifyContent="center"
            >
                <Link>
                    <Icon as={FaTwitter} boxSize="24px" />
                </Link>
                <Link>
                    <Icon as={FaFacebook} boxSize="24px" />
                </Link>
                <Link>
                    <Icon as={FaCopy} boxSize="24px" />
                </Link>
            </Flex>
        </chakra.div>
    );
}


export default ShareLinks;