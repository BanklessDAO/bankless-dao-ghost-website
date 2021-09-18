import {
  Text,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Link from './Link';
import SocialIcons from './SocialIcons';

export default function Footer(): JSX.Element {
  return (
    <Box as="footer" className="footer-section global-footer">
      <Flex className="footer-wrap">
        <Box className="footer-data">
          <Box className="footer-logo">
            <Link className="is-image" href="/">
              <Image src="/images/bankless-logo.png" alt="Bankless DAO logo" />
            </Link>
          </Box>
          <Text className="footer-description">
            A decentralized autonomous organization that acts as a steward of
            the Bankless Movement progressing the world towards a future of
            greater freedom.
          </Text>
          <Box className="footer-icons">
            <SocialIcons />
          </Box>
        </Box>
        <Flex mx={4} flexDirection={{ base: 'column', md: 'row' }}>
          <UnorderedList className="footer-links" mx="0">
            <ListItem className="footer-link">
              <Link href="https://discord.gg/bjPz2w9Zts">Discord</Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f">
                Wiki
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://forum.bankless.community/">Forum</Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://snapshot.org/#/banklessvault.eth">
                Vote
              </Link>
            </ListItem>
          </UnorderedList>
          <UnorderedList className="footer-links" mx="0">
            <ListItem className="footer-link">
              <Link href="/multisig">
                BANK
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="#">
                Privacy
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://github.com/BanklessDAO">
                Github
              </Link>
            </ListItem>
            <ListItem className="footer-link">
              <Link href="https://www.twitch.tv/banklessdao">
                TwitchTV
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
      <Box className="footer-copyright">
        GoBankless &copy; 2021. All Rights Reserved. Published with{' '}
        <Link href="https://ghost.org" target="_blank">
          Ghost
        </Link>
        .
      </Box>
    </Box>
  );
}
