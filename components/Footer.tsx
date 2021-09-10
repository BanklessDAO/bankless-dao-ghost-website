import {
  Text,
  Box,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import Link from './Link';
import SocialIcons from './SocialIcons';

export default function Footer(props): JSX.Element {
  const { size } = props;

  const footerStyles = useMultiStyleConfig('Footer', { size });

  const footerLinks = [
    { url: 'https://discord.gg/bjPz2w9Zts', text: 'Discord' },
    {
      url: 'https://www.notion.so/BanklessDAO-Wiki-82ba81e7da1c42adb7c4ab67a4f22e8f',
      text: 'Wiki',
    },
    { url: 'https://forum.bankless.community/', text: 'Forum' },
    { url: 'https://snapshot.org/#/banklessvault.eth', text: 'Vote' },
  ];

  return (
    <Box as="footer" sx={footerStyles.section}>
      <Flex sx={footerStyles.wrapper}>
        <Box sx={footerStyles.data}>
          <Box sx={footerStyles.logo}>
            <Link href="/">
              <Image src="/images/bankless-logo.png" alt="Bankless DAO logo" />
            </Link>
          </Box>
          <Text sx={footerStyles.description}>
            A decentralized autonomous organization that acts as a steward of
            the Bankless Movement progressing the world towards a future of
            greater freedom.
          </Text>
          <Box sx={footerStyles.icons}>
            <SocialIcons />
          </Box>
        </Box>
        <Flex sx={footerStyles.fNav}>
          {footerLinks.map((footerLink, id) => (
            <Box key={id} sx={footerStyles.navColumn}>
              <UnorderedList>
                <ListItem>
                  <Link href={footerLink.url}>{footerLink.text}</Link>
                </ListItem>
              </UnorderedList>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Box sx={footerStyles.copyright}>
        GoBankless &copy; 2021. All Rights Reserved. Published with{' '}
        <Link href="https://ghost.org" target="_blank">
          Ghost
        </Link>
        .
      </Box>
    </Box>
  );
}
