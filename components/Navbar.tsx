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
} from '@chakra-ui/react';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import SearchModal from './SearchModal';
import { useHotkeys } from 'react-hotkeys-hook';
import React, { useEffect, useState } from 'react';
import Link from './Link';
import BallanceModal from './BalanceModal';
import { useWeb3 } from '../contexts/Web3Context';

export default function Navbar() {
  const {
    isOpen: balanceModalIsOpen,
    onOpen: onBalanceModalOpen,
    onClose: onBalanceModalClose,
  } = useDisclosure();
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
    <Box as="header" width="100%" color="white" overflowY="visible">
      <BallanceModal
        isOpen={balanceModalIsOpen}
        onClose={onBalanceModalClose}
      />
      <SearchModal isOpen={searchModalIsOpen} onClose={onSearchModalClose} />
      <Flex
        className="header-wrap"
        minH="unset"
        marginTop={{ sm: '30px' }}
        marginBottom={{ sm: '60px' }}>
        <Box
          className="header-logo"
          position={{ sm: 'static', lg: 'absolute' }}>
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
        <Box className="header-nav">
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
              <DrawerContent paddingTop="4" background="var(--bg-nav)">
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
                      <BankBallanceButton
                        onClick={onBalanceModalOpen}
                        size="sm"
                      />
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
              <BankBallanceButton
                onClick={onBalanceModalOpen}
                fontSize="12px"
                marginRight="18px"
              />
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

function BankBallanceButton({ ...props }) {
  const { bankBalance, loadBankBalance, isConnected } = useWeb3();

  useEffect(() => {
    if (isConnected) {
      loadBankBalance();
    }
  }, [isConnected]);

  if (bankBalance === null) {
    return null;
  }

  const compactFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <Button variant="outline" {...props}>
      {compactFormatter.format(bankBalance)} BANK
    </Button>
  );
}

function ConnectionButton({ ...props }) {
  const { hasWeb3, walletAddress, connectWallet, disconnectWallet } = useWeb3();

  function handleClick() {
    if (!hasWeb3) {
      alert(
        'Please use a Web3 compatible browser or extension, such as MetaMask',
      );
    }
    if (walletAddress) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  }

  const buttonText = walletAddress
    ? `Sign out from ${walletAddress.substr(0, 3)}..${walletAddress.substr(-3)}`
    : 'Connect Wallet';

  return (
    <Button onClick={handleClick} {...props}>
      {buttonText}
    </Button>
  );
}
