import {
  Heading,
  Box,
  Flex,
  Image,
  ListItem,
  ListIcon,
  List,
  IconButton,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import SearchModal from './SearchModal';
import { useHotkeys } from 'react-hotkeys-hook';
import {
  checkWallet,
  checkWeb3,
  connectWallet,
  disconnectWallet,
} from '../lib/web3';
import React, { useState } from 'react';
import Link from './Link';

export default function Navbar() {
  const styles = useMultiStyleConfig('Header', {});

  const {
    isOpen: searchModalIsOpen,
    onOpen: onSearchModalOpen,
    onClose: onSearchModalClose,
  } = useDisclosure();
  const {
    isOpen: mobileMenuIsOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure();
  useHotkeys('/', (e) => {
    e.preventDefault();
    onSearchModalOpen();
  });
  return (
    <Box
      as="header"
      width="100%"
      color="white"
      overflowY="visible"
      sx={styles.section}>
      <SearchModal isOpen={searchModalIsOpen} onClose={onSearchModalClose} />
      <Flex
        sx={styles.wrap}
        minH="unset"
        marginTop={{ sm: '30px' }}
        marginBottom={{ sm: '60px' }}>
        <Box sx={styles.logo} position={{ sm: 'static', lg: 'absolute' }}>
          <Heading as="h1" margin="0" lineHeight="0">
            <Link href="/" style={{ boxShadow: 'none' }} display="inline-block">
              <Image
                style={{ boxShadow: 'none' }}
                src="/images/bankless-logo.png"
                alt="Bankless"
                maxW="300px"
                maxH="60px"
              />
            </Link>
          </Heading>
        </Box>
        <Box
          sx={{
            ...styles.hNav,
            '& nav': {
              display: {
                sm: 'none',
              },
            },
            '& nav, & nav>ul+ul': {
              display: {
                xl: 'flex',
              },
              alignItems: {
                xl: 'center',
              },
              flex: {
                xl: '0 0 auto',
              },
            },
            '& li, & a': {
              fontSize: '14px',
              display: 'inline-block',
            },
            '& a, & .signin a, & .signout a, & .signup': {
              marginRight: '18px',
            },
            '& .signup a': {
              fontFamily: 'spartan',
              fontSize: '12px',
              marginRight: 0,
              padding: '10px 12px 8px',
              letterSpacing: '.5px',
              lineHeight: '18px',
            },
          }}>
          <Flex as="nav" id="mobile-nav">
            <IconButton
              aria-label="site navigation menu"
              variant="unstyled"
              icon={<HamburgerIcon />}
              fontSize="32px"
              onClick={onMobileMenuOpen}
              _focus={{
                outline: 'none',
              }}
            />
            <Drawer
              isOpen={mobileMenuIsOpen}
              placement="right"
              onClose={onMobileMenuClose}>
              <DrawerOverlay />
              <DrawerContent
                paddingTop="4"
                background="var(--chakra-colors-bg-nav)">
                <DrawerCloseButton size="lg" />

                <DrawerBody paddingTop="4">
                  <List spacing="2" fontWeight="bold" fontFamily="spartan">
                    <ListItem>
                      <Link href="/">Home</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="/guilds">Guilds</Link>
                    </ListItem>
                    <ListItem>
                      <Link href="/contribute">Contribute</Link>
                    </ListItem>
                    <ListItem display="flex" onClick={onSearchModalOpen}>
                      <Box marginRight="4">Search</Box>
                      <ListIcon as={Search2Icon} color="white" />
                    </ListItem>
                    <ListItem>
                      <ConnectionButton size="sm" />
                    </ListItem>
                  </List>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Flex as="nav">
            <List>
              <ListItem>
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link href="/guilds">Guilds</Link>
              </ListItem>
              <ListItem>
                <Link href="/contribute">Contribute</Link>
              </ListItem>
            </List>
            <List>
              <ConnectionButton fontSize="12px" marginRight="18px" />
              <ListItem>
                <Button
                  variant="unstyled"
                  _focus={{ outline: 'none' }}
                  onClick={onSearchModalOpen}>
                  <ListIcon as={Search2Icon} color="white" />
                </Button>
              </ListItem>
            </List>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

function ConnectionButton({ ...props }) {
  const [wallet, setWallet] = useState('');
  // Defining button actions
  async function connectionIntent() {
    console.log('Connecting wallet...');
    let web3Check = await checkWeb3();
    console.log('Web3 exists?', web3Check);
    if (web3Check) {
      let connected = await connectWallet();
      console.log(connected);
      if (connected !== false && connected.indexOf('0x') === 0) {
        setWallet(connected);
      }
    } else {
      alert('Please browse website with Metamask Mobile!');
    }
  }
  async function signoutIntent() {
    await disconnectWallet();
    setWallet('');
  }
  // Check if wallet is connected
  checkWallet().then((check) => {
    if (check !== false) {
      setWallet(check);
    }
  });
  let text, onClick;

  if (wallet.length === 0) {
    text = 'Connect Wallet';
    onClick = connectionIntent;
  } else {
    text = `Sign out from ${wallet.substr(0, 3)}..${wallet.substr(-3)}`;
    onClick = signoutIntent;
  }

  return (
    <Button onClick={onClick} {...props}>
      {text}
    </Button>
  );
}
