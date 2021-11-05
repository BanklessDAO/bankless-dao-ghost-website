// Next imports
import Head from 'next/head';
import {
  chakra,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  GridItem,
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
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
      <chakra.main className="global-main" minW="350px" maxW="container.xl">
        <Container w="full" h="full" px={0} mb={{ base: 0, lg: 8 }}>
          <VStack w="full" spacing={{ base: "2.5rem", lg: "20px" }}>
            <Stack w="full" direction={{ base: 'column-reverse', lg: 'row' }} align="center">
              <VStack w="full" align="start" spacing={{ base: "2.5rem", lg: "20px" }}>
                <VStack w="full" pr="50px" align="start" spacing="20px">
                  <Heading m="0" as="h1" size="4xl">About BANK</Heading>
                  <Text m="0" fontSize="14px" lineHeight="20px">
                    BANK is the native token of the Bankless DAO, which acts as a tool to coordinate activity adn is awarded to community members for participation inthe bankless movement.
                  </Text>
                  <Stack w="full" direction={{ base: "row", lg: "column" }} spacing={{ base: "34px", lg: "20px" }}>
                    <Button w="10rem" color="white" fontSize="12px">
                      View Contract
                    </Button>
                    <Button w="10rem" bg="black" color="white" fontSize="12px">
                      Claim Contract
                    </Button>
                  </Stack>
                </VStack>
                <VStack w="full" pr="50px" align="start" spacing="20px">
                  <Heading m="0" as="h2" size="2xl">Ways to Earn</Heading>
                  <Text m="0" fontSize="14px" lineHeight="20px">
                    To seed distribution initially, BANK was retroactively airdropped to eligible Bankless Community members.
                  </Text>
                  <Text m="0" fontSize="14px" lineHeight="20px">
                    Full membership in the DAO is contingent on holding 35000 BANK. There are several methods of acquiring BANK.
                  </Text>
                </VStack>
              </VStack>
              <Box className="circular-hero">
                <Text className="bank-hero" fontSize={{ base: "100px", lg: "160px" }}>B</Text>
              </Box>
            </Stack>
            <Grid w="full" gap='5px' alignItems='center' templateColumns={{ base: "100%", lg: "10px 1fr 10px 1fr" }} templateRows={{ base: "repeat(7, 1fr)", lg: "repeat(4, 1fr)" }}>
              {/* Section 1 */}
              <Box h='100%' gridColumn='1' gridRow='1/6' borderLeft={{ base: "none", lg: "2px dotted #2F3E4E"}} display={{ base: "none", lg: "initial" }} />
              <GridItem rowStart={1}>
                <Heading m="0" as="h3" size="m">Liquidity Pools</Heading>
              </GridItem>
              <GridItem rowStart={2}>
                <Text m="auto 0" textAlign="start" fontSize="13px" lineHeight="15px">BANK is available on both Sushiswap and Uniswap</Text>
              </GridItem>
              <Stack w="100%" align={{ base: "center", lg: "start" }} direction={{ base: "row", lg: "column" }} gridRow={{ base: "auto", lg: "3/5" }} gridColumn={{ base: "auto", lg: "4" }} spacing={{ base: "20px", lg: "12.5px" }}>
                <Button gridRow="3" w="min-content" m="auto 0" color="white" fontSize="12px">Uniswap Pool</Button>
                <Button gridRow={{ base: "3", lg: "4" }} w="min-content" m="auto 0" color="white" fontSize="12px">Sushiswap Pool</Button>
              </Stack>
              {/* Section 2 */}
              <Box h='100%' gridColumn='3' gridRow='1/6' borderLeft={{ base: "none", lg: "2px dotted #2F3E4E"}} display={{ base: "none", lg: "initial" }} />
              <GridItem rowStart={{ base: 4, lg: 1 }}>
                <Heading m="0" as="h3" size="m">Contribute</Heading>
              </GridItem>
              <GridItem rowStart={{ base: 5, lg: 2 }}>
                <Text m="auto 0" textAlign="start" fontSize="13px" lineHeight="15px">Have an Idea to help the world go Bankless?</Text>
              </GridItem>
              <GridItem rowStart={{ base: 6, lg: 3 }}>
                <Text m="auto 0" textAlign="start" fontSize="13px" lineHeight="15px">Join the Discord. Get a Guest Pass and start contributing.</Text>
              </GridItem>
              <GridItem rowStart={{ base: 7, lg: 4 }}>
                <Button w="min-content" color="white" fontSize="12px">Join Discord</Button>
              </GridItem>
            </Grid>
            <VStack align="start" w="full">
              <Heading m="0" mb="20px" as="h2" size="l">Multisig Vaults</Heading>
              <Table>
                <Thead>
                  <Tr borderTop="1px solid white">
                    <Th className="vault-td" display={{ base: "none", lg: "table-cell" }} color="white" textTransform="none">#</Th>
                    <Th className="vault-td" color="white" textTransform="none">Guild</Th>
                    <Th className="vault-td" color="white" textTransform="none">Address</Th>
                    <Th display={{ base: "none", lg: "table-cell" }} />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>1</Td>
                    <Td className="vault-td">Developer's Guild</Td>
                    <Td className="vault-td">0x8a3---------------------------------------9BD8F637</Td>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>View</Td>
                  </Tr>
                  <Tr>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>2</Td>
                    <Td className="vault-td">Writer's Guild</Td>
                    <Td className="vault-td">0x8a3---------------------------------------9BD8F637</Td>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>View</Td>
                  </Tr>
                  <Tr>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>3</Td>
                    <Td className="vault-td">Operation's Guild</Td>
                    <Td className="vault-td">0x8a3---------------------------------------9BD8F637</Td>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>View</Td>
                  </Tr>
                  <Tr>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>4</Td>
                    <Td className="vault-td">Designer's Guild</Td>
                    <Td className="vault-td">0x8a3---------------------------------------9BD8F637</Td>
                    <Td className="vault-td" display={{ base: "none", lg: "table-cell" }}>View</Td>
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
