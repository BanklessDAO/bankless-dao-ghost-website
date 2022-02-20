import {
  Text,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  HStack,
} from '@chakra-ui/react';

import AnalyticsEventTracker from './AnalyticsEventTracker';
import Link from './Link';
import SocialIcons from './SocialIcons';

interface socialLink {
  name: string;
  href: string;
}


let SOCIALS_LEFT: socialLink[] = [
  { name: 'Discord', href: 'https://discord.gg/bjPz2w9Zts' },
  { name: 'Join Olympus Pro', href: 'https://pro.olympusdao.finance/?utm_source=banklessdao&utm_medium=affiliate&utm_campaign=op-affiliate' },
  { name: 'Wiki', href: 'https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f' },
  { name: 'Forum', href: 'https://forum.bankless.community/' },
  { name: 'Vote', href: 'https://snapshot.org/#/banklessvault.eth' },
]

let SOCIALS_RIGHT: socialLink[] = [
  { name: 'BANK', href: '/multisig' },
  { name: 'Privacy', href: 'https://forum.bankless.community/privacy' },
  { name: 'Github', href: 'https://github.com/BanklessDAO' },
  { name: 'TwitchTV', href: 'https://www.twitch.tv/banklessdao' },
]

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
        <HStack spacing={16} wrap="wrap">
          <UnorderedList className="footer-links" mx="0">
            {SOCIALS_LEFT.map(_social => {
              return <AnalyticsEventTracker
                key={_social.name}
                events={[{
                  eventType: "click",
                  eventName: "CLICK_FOOTER_LINK",
                  data: {
                    link: _social.href,
                    title: _social.name
                  }
                }]}>
                <ListItem className="footer-link">
                  <Link href={_social.href}>{_social.name}</Link>
                </ListItem>
              </AnalyticsEventTracker>
            })}
          </UnorderedList>
          <UnorderedList className="footer-links" mx="0">
            {SOCIALS_RIGHT.map(_social => {
              return <AnalyticsEventTracker
              key={_social.name}
                events={[{
                  eventType: "click",
                  eventName: "CLICK_FOOTER_LINK",
                  data: {
                    link: _social.href,
                    title: _social.name
                  }
                }]}>
                <ListItem className="footer-link">
                  <Link href={_social.href}>{_social.name}</Link>
                </ListItem>
              </AnalyticsEventTracker>
            })}
          </UnorderedList>
        </HStack>
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
