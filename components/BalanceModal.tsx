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
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Token3d from '../public/images/token-3d.png';
import Image from 'next/image';
import { useWeb3 } from '../contexts/Web3Context';

export interface BalanceModalProps
  extends Pick<ModalProps, 'isOpen' | 'onClose'> {}

export default function BallanceModal(props: BalanceModalProps) {
  const { bankBalance, loadBankBalance } = useWeb3();
  useEffect(() => {
    if (props.isOpen) {
      loadBankBalance();
    }
  }, [props.isOpen]);

  let compactFormatter = Intl.NumberFormat('en', { notation: 'compact' });
  let longFormatter = Intl.NumberFormat('en');

  const shortValue =
    bankBalance === null ? '-' : compactFormatter.format(bankBalance);
  const longValue =
    bankBalance === null ? '-' : longFormatter.format(bankBalance);

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent bg="steel.100">
        <ModalCloseButton />
        <ModalHeader>BANK Account</ModalHeader>
        <ModalBody>
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
        </ModalBody>
        <ModalFooter>
          <Button size="sm">Add BANK to MetaMask</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
