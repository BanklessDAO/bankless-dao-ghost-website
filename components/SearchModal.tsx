import { Box, Input, Modal, ModalContent, ModalOverlay, UseModalProps } from '@chakra-ui/react';

export interface SearchModalProps {
  isOpen: boolean;
  onClose: UseModalProps['onClose'];
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width="calc(100% - 50px)" maxWidth="900px">
        <Box bgColor="var(--color-body)">
          <Input
            variant="unstyled"
            placeholder="Type your keywords"
            fontFamily="two"
            fontSize="30px"
            display="block"
            color="white"
            height="auto"
            padding="25px 20px"
          />
          <Box
            fontFamily="four"
            background="red"
            color="var(--color-font-two)"
            padding="8px 20px"
            fontSize="small"
          >
            Please enter at least 3 characters
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
}
