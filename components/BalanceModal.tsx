import {
  ModalProps,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  ModalHeader,
  Box,
  ModalFooter,
  Button,
  Square,
  HStack,
  ButtonGroup,
  useClipboard,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Token3d from '../public/images/token-3d.png';
import Image from 'next/image';
import { useWeb3 } from '../contexts/Web3Context';
import { BiCopy, BiHide, BiLogOutCircle, BiShow } from 'react-icons/bi';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { addBankToMetaMask } from '../lib/web3';

export interface BalanceModalProps
  extends Pick<ModalProps, 'isOpen' | 'onClose'> {}

export default function BallanceModal(props: BalanceModalProps) {
  const { bankBalance, loadBankBalance, walletAddress, disconnectWallet } =
    useWeb3();
  const { hasCopied, onCopy } = useClipboard(walletAddress || '');
  const [isMasked, setIsMasked] = useState(true);

  useEffect(() => {
    if (props.isOpen) {
      loadBankBalance();
    }
  }, [props.isOpen, loadBankBalance]);

  let compactFormatter = Intl.NumberFormat('en', { notation: 'compact' });
  let longFormatter = Intl.NumberFormat('en');

  const maskedAddress = (walletAddress || '')
    .split('')
    .map((char, i) => (i > 3 ? '*' : char))
    .join('');

  const shortValue =
    bankBalance === null ? '-' : compactFormatter.format(bankBalance);
  const longValue =
    bankBalance === null ? '-' : longFormatter.format(bankBalance);

  function handleDisconnect() {
    disconnectWallet();
    props.onClose();
  }

  async function handleAddToMetamask() {
    await addBankToMetaMask();
  }

  return (
    <Modal returnFocusOnClose={false} {...props}>
      <ModalOverlay />
      <ModalContent bg="steel.100">
        <ModalCloseButton />
        <ModalHeader>
          <Box
            display="inline-block"
            borderBottom="solid 2px"
            borderBottomColor="red.500">
            BANK Account
          </Box>
        </ModalHeader>
        <ModalBody>
          <VStack spacing="10" alignItems="stretch">
            <VStack spacing="5">
              <HStack fontSize="sm" fontWeight="bold" fontFamily="mono">
                <Box>{isMasked ? maskedAddress : walletAddress}</Box>
                <IconButton
                  variant="outline"
                  size="xs"
                  aria-label={isMasked ? 'show address' : 'hide address'}
                  onClick={() => setIsMasked(!isMasked)}
                  icon={isMasked ? <BiShow /> : <BiHide />}
                />
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <Button
                  size="xs"
                  variant="outline"
                  leftIcon={<BiCopy />}
                  onClick={onCopy}>
                  {hasCopied ? 'Copied' : 'Copy Address'}
                </Button>
                <Button
                  as="a"
                  variant="outline"
                  size="xs"
                  href={`https://etherscan.io/address/${walletAddress}`}
                  target="_blank"
                  leftIcon={<ExternalLinkIcon />}>
                  View on Etherscan
                </Button>
                <Button
                  size="xs"
                  variant="outline"
                  leftIcon={<BiLogOutCircle />}
                  onClick={handleDisconnect}>
                  Disconnect
                </Button>
              </Stack>
            </VStack>
            <VStack
              border="solid 1px"
              borderColor="steel.400"
              spacing={0}
              padding="8">
              <Box fontSize="sm">Bankless DAO / $BANK </Box>
              <Box
                fontSize="50px"
                fontWeight="bold"
                fontFamily="mono"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative">
                {shortValue}
                <Square size="12">
                  <Image src={Token3d} alt="BANK TOKEN" />
                </Square>
              </Box>
              <Box fontSize="xs">{longValue} BANK</Box>
            </VStack>
          </VStack>
        </ModalBody>
        <ModalFooter justifyContent="center">
          <Button size="sm" variant="outline" onClick={handleAddToMetamask}>
            Add BANK to MetaMask
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
