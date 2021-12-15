// import Header from '../../components/Header';
import copy from 'copy-to-clipboard';
import { useEffect, useState } from 'react';
import { Flex, chakra, Icon, Box } from '@chakra-ui/react';
import Link from './Link';
import { FaTwitter, FaFacebook, FaCopy } from 'react-icons/fa';
import { TwitterShareButton, FacebookShareButton } from 'react-share';

interface ShareLinksProps {
  postTitle?: string;
}

// PostPage page component
const ShareLinks: React.FC<ShareLinksProps> = ({ postTitle = '' }) => {
  // Render post title and content in the page from props
  const [link, setLink] = useState<string>('');
  const [showCopyTooltip, setShowCopyTooltip] = useState<boolean>(false);

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  const copyToClipboard = () => {
    copy(link);
    setShowCopyTooltip(true);
    setTimeout(() => {
      setShowCopyTooltip(false);
    }, 1500);
  };

  return (
    <>
      <chakra.div
        className="post-share-section"
        width="100%"
        paddingTop="40px"
        marginBottom="15vh">
        <Flex
          position="relative"
          display="inline-flex"
          width="100%"
          justifyContent="center">
          <Link href={link}>
            <TwitterShareButton
              url={link}
              title={postTitle}
              hashtags={['Bankless']}>
              <Icon as={FaTwitter} boxSize="24px" />
            </TwitterShareButton>
          </Link>
          <Link href={link}>
            <FacebookShareButton url={link} quote={postTitle}>
              <Icon as={FaFacebook} boxSize="24px" />
            </FacebookShareButton>
          </Link>
          <Link href={link} onClick={copyToClipboard}>
            {showCopyTooltip && (
              <Box
                w="120px"
                background="blackAlpha.50"
                color="white"
                textAlign="center"
                className="copy-tooltip"
                position="absolute"
                marginTop="-72px"
                fontSize="md"
                _after={{
                  content: '""',
                  pos: 'absolute',
                  top: '100%',
                  left: '50%',
                }}>
                Copied!
              </Box>
            )}
            <Icon as={FaCopy} boxSize="24px" />
          </Link>
        </Flex>
      </chakra.div>
    </>
  );
};

export default ShareLinks;
