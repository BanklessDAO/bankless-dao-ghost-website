// Next imports
import Head from 'next/head';
import { chakra, Container, Flex, Grid, SimpleGrid, GridItem, Box, Stack, VStack, HStack, Heading, Text, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
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
          <VStack spacing="20px">
            <Stack direction="row" align="center">
              <VStack align="start" spacing="20px">
                <Heading m="0" as="h1" size="4xl">About BANK</Heading>
                <VStack pr="50px" align="start" spacing="20px">
                  <Text m="0" fontSize="14px" lineHeight="20px">
                    BANK is the native token of the Bankless DAO, which acts as a tool to coordinate activity adn is awarded to community members for participation inthe bankless movement.
                  </Text>
                  <Button color="white" fontSize="12px">
                    View Contract
                  </Button>
                  <Button bg="black" color="white" fontSize="12px">
                    Claim Contract
                  </Button>
                </VStack>
                <Heading m="0" as="h2" size="2xl">Ways to Earn</Heading>
                <VStack pr="50px" align="start" spacing="20px">
                  <Text m="0" fontSize="14px" lineHeight="20px">
                    To seed distribution initially, BANK was retroactively airdropped to eligible Bankless Community members.
                  </Text>
                  <Text m="0" fontSize="14px" lineHeight="20px">
                    Full membership in the DAO is contingent on holding 35000 BANK. There are several methods of acquiring BANK.
                  </Text>
                </VStack>
              </VStack>
              <Box className="circular-hero">
                <Text className="bank-hero">B</Text>
              </Box>
            </Stack>
            <Grid templateColumns="1fr 1fr">
              <SimpleGrid templateRows="repeat(4, 1fr)" px="1rem" borderLeft="2px dotted #2F3E4E">
                <Heading m="0" as="h3" size="m">Liquidity Pools</Heading>
                <Text m="auto 0" textAlign="start" fontSize="13px" lineHeight="15px">BANK is available on both Sushiswap and Uniswap</Text>
                <Button w="min-content" color="white" fontSize="12px">Uniswap Pool</Button>
                <Button w="min-content" color="white" fontSize="12px">Sushiswap Pool</Button>
              </SimpleGrid>
              <SimpleGrid templateRows="repeat(4, 1fr)" px="1rem" borderLeft="2px dotted #2F3E4E">
                <Heading m="0" as="h3" size="m">Contribute</Heading>
                <Text m="auto 0" textAlign="start" fontSize="13px" lineHeight="15px">Have an Idea to help the world go Bankless?</Text>
                <Text m="auto 0" textAlign="start" fontSize="13px" lineHeight="15px">Join the Discord. Get a Guest Pass and start contributing.</Text>
                <Button w="min-content" color="white" fontSize="12px">Join Discord</Button>
              </SimpleGrid>
            </Grid>
            <VStack align="start" w="full">
              <Heading m="0" mb="20px" as="h2" size="l">Multisig Vaults</Heading>
              <Table>
                <Thead>
                  <Tr borderTop="1px solid white">
                    <Th color="white" fontSize="14px" textTransform="none" whiteSpace="nowrap" align="left" pl="5px">#</Th>
                    <Th color="white" fontSize="14px" textTransform="none" whiteSpace="nowrap" align="left" pl="5px">Guild</Th>
                    <Th color="white" fontSize="14px" textTransform="none" whiteSpace="nowrap" align="left" pl="5px">Address</Th>
                    <Th />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">1</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">Developer's Guild</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">0x8a3---------------------------------------9BD8F637</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">View</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">2</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">Writer's Guild</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">0x8a3---------------------------------------9BD8F637</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">View</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">3</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">Operation's Guild</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">0x8a3---------------------------------------9BD8F637</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">View</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">4</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">Designer's Guild</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">0x8a3---------------------------------------9BD8F637</Td>
                    <Td fontSize="14px" whiteSpace="nowrap" align="left" pl="5px">View</Td>
                  </Tr>
                </Tbody>
              </Table>
            </VStack>
          </VStack>
        </Container>
      </chakra.main>
      <Footer />
    </>
  )
}
