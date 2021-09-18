import { Container, Flex, VStack, Heading, Text } from "@chakra-ui/react";

export default function multiSig() {
  return (
    <Container maxW="container.xl" h="full">
      <Flex>
        <VStack>
          <Heading>About BANK</Heading>
          <Text>
            BANK is the native token of the Bankless DAO, which acts as a tool to coordinate activity adn is awarded to community members for participation inthe bankless movement.
          </Text>
        </VStack>
      </Flex>
    </Container>
  )
}
