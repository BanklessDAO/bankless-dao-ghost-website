// Next imports
import Head from 'next/head';
import { chakra, Container, Flex, Box, VStack, HStack, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
// Component imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function multiSig() {
  return (
    <>
      <Head>
        <title>About BANK</title>
        <meta name="description" content="Bankless DAO community site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <chakra.main className="global-main">
        <Container maxW="container.md" h="full" mb={8}>
          <Flex direction="column">
            <HStack>
              <Box>
                <VStack align="start">
                  <Heading>About BANK</Heading>
                  <Text>
                    BANK is the native token of the Bankless DAO, which acts as a tool to coordinate activity adn is awarded to community members for participation inthe bankless movement.
                  </Text>
                  <Button>
                    View Contract
                  </Button>
                  <Button>
                    Claim Contract
                  </Button>
                </VStack>
                <VStack align="start">
                  <Heading>Ways to Earn</Heading>
                  <Text>
                    To seed distribution initially, BANK was retroactively airdropped to eligible Bankless Community members.
                  </Text>
                  <Text>
                    Full membership in the DAO is contingent on holding 35000 BANK. There are several methods of acquiring BANK.
                  </Text>
                </VStack>
              </Box>
              <Box className="circular-hero">
                <Text m="auto" w="106px" fontSize="160px" fontWeight="700" color="white" borderBottom="11px solid #FF1A1A">B</Text>
              </Box>
            </HStack>
            <HStack>
              <VStack>
                <Heading>Liquidity Pools</Heading>
                <Text>BANK is available on both Sushiswap and Uniswap</Text>
                <Button>Uniswap Pool</Button>
                <Button>Sushiswap Pool</Button>
              </VStack>
              <VStack>
                <Heading>Contribute</Heading>
                <Text>Have an Idea to help the world go Bankless?</Text>
                <Text>Join the Discord. Get a Guest Pass and start contributing.</Text>
                <Button>Join Discord</Button>
              </VStack>
            </HStack>
            <VStack>
              <Heading>Multisig Vaults</Heading>
              <Table>
                <Thead>
                  <Tr>
                    <Th color="white">#</Th>
                    <Th color="white">Guild</Th>
                    <Th color="white">Address</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Developer's Guild</Td>
                    <Td>0x8a3---------------------------------------9BD8F637</Td>
                    <Td>View</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>Writer's Guild</Td>
                    <Td>0x8a3---------------------------------------9BD8F637</Td>
                    <Td>View</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>Operation's Guild</Td>
                    <Td>0x8a3---------------------------------------9BD8F637</Td>
                    <Td>View</Td>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>Designer's Guild</Td>
                    <Td>0x8a3---------------------------------------9BD8F637</Td>
                    <Td>View</Td>
                  </Tr>
                </Tbody>
              </Table>
            </VStack>
          </Flex>
        </Container>
      </chakra.main>
      <Footer />
    </>
  )
}
