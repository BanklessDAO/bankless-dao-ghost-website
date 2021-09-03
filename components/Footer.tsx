import {
  Text,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Link from './Link';
import SocialIcons from "./SocialIcons";

export default function Footer(): JSX.Element {
  return (
    <Box as="footer" className="footer-section global-footer">
      <Flex className="footer-wrap">
        <Box className="footer-data">
          <Box className="footer-logo">
            <Link className="is-image" href="/">
              <Image src="bankless-logo.png" alt="Bankless DAO logo" />
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
        <Flex className="footer-nav">
          <Box className="footer-nav-column">
            <UnorderedList>
              <ListItem>
                <Link href="https://discord.gg/bjPz2w9Zts">Discord</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box className="footer-nav-column">
            <UnorderedList>
              <ListItem>
                <Link href="https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f">
                  Wiki
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box className="footer-nav-column">
            <UnorderedList>
              <ListItem>
                <Link href="https://forum.bankless.community/">Forum</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box className="footer-nav-column">
            <UnorderedList>
              <ListItem>
                <Link href="https://snapshot.org/#/banklessvault.eth">
                  Vote
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
      <Box className="footer-copyright">
        GoBankless &copy; 2021. All Rights Reserved. Published with{" "}
        <Link href="https://ghost.org" target="_blank">
          Ghost
        </Link>
        .
      </Box>
    </Box>
  );
}
