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
  ButtonGroup,
  ButtonProps,
  DrawerFooter,
} from '@chakra-ui/react';
import Davatar from '@davatar/react';
import { ErrorBoundary } from 'react-error-boundary';
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import SearchModal from './SearchModal';
import { useHotkeys } from 'react-hotkeys-hook';
import React, { useEffect, useState } from 'react';
import Link from './Link';
import BallanceModal from './BalanceModal';
import { useWeb3 } from '../contexts/Web3Context';

export default function Navbar() {
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
                  </List>
                </DrawerBody>
                <DrawerFooter>
                  <ConnectionButton size="sm" />
                </DrawerFooter>
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
              <ListItem marginRight="18px">
                <ConnectionButton size="sm" />
              </ListItem>
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

function ConnectionButton(props: ButtonProps) {
  const {
    hasWeb3,
    walletAddress,
    ensName,
    connectWallet,
    disconnectWallet,
    isConnected,
    bankBalance,
    loadBankBalance,
  } = useWeb3();
  const {
    isOpen: balanceModalIsOpen,
    onOpen: onBalanceModalOpen,
    onClose: onBalanceModalClose,
  } = useDisclosure();

  useEffect(() => {
    if (isConnected) {
      loadBankBalance();
    }
  }, [isConnected]);

  const compactFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  function handleClick() {
    if (!hasWeb3) {
      alert(
        'Please use a Web3 compatible browser or extension, such as MetaMask',
      );
    }
    if (walletAddress) {
      onBalanceModalOpen();
    } else {
      connectWallet();
    }
  }

  function WalletFallback({error, resetErrorBoundary}) {

    console.log(error.message);
    resetErrorBoundary();
    let buttonText = () => {
      if (!walletAddress) {
        return 'Connect Wallet';
      }
      if (ensName) {
        return ensName;
      }
      return `${walletAddress.substr(0, 4)}..${walletAddress.substr(-3)}`;
    };

    return (
      <span>{buttonText()}</span>
    )
  }

  return (
    <>
      <BallanceModal
        isOpen={balanceModalIsOpen}
        onClose={onBalanceModalClose}
      />
      <ButtonGroup size={props.size} isAttached onClick={handleClick}>
        {bankBalance !== null && (
          <Button bg="black" color="white">
            {compactFormatter.format(bankBalance)} BANK
          </Button>
        )}
        <Button>
          <ErrorBoundary FallbackComponent={WalletFallback} >
              <Davatar size={24} address={walletAddress || ""} />
          </ErrorBoundary>
        </Button>
      </ButtonGroup>
    </>
  );
}
