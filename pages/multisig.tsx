// Next imports
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
  Td,
} from '@chakra-ui/react';

const SMALL_BASE_TEXT_SIZE = '12px';
const LARGE_BASE_TEXT_SIZE = '14px';
const SMALL_BASE_HEADING_SIZE = '32px';
const MEDIUM_BASE_HEADING_SIZE = '41px';
const LARGE_BASE_HEADING_SIZE = '65px';

export default function multiSig() {
  return (
    <chakra.main className="global-main" maxW="container.xl" mb="20px">
      <Container w="full" h="full" px={0} mb={{ base: 0, lg: 8 }}>
        <VStack w="full" spacing={{ base: '2.5rem', lg: '20px' }}>
          <Stack
            w="full"
            direction={{ base: 'column-reverse', lg: 'row' }}
            align="center">
            <VStack
              w="full"
              align="start"
              spacing={{ base: '2.5rem', lg: '20px' }}>
              <VStack
                w="full"
                pr={{ base: 0, lg: '50px' }}
                align="start"
                spacing="20px">
                <Heading
                  m="0"
                  as="h1"
                  fontSize={{
                    base: SMALL_BASE_HEADING_SIZE,
                    lg: LARGE_BASE_HEADING_SIZE,
                  }}
                  fontWeight="700">
                  About BANK
                </Heading>
                <Text
                  m="0"
                  fontSize={{
                    base: SMALL_BASE_TEXT_SIZE,
                    lg: LARGE_BASE_TEXT_SIZE,
                  }}
                  lineHeight="20px">
                  BANK is the native token of the Bankless DAO, which acts as a
                  tool to coordinate activity adn is awarded to community
                  members for participation inthe bankless movement.
                </Text>
                <Stack
                  w="full"
                  direction={{ base: 'row', lg: 'column' }}
                  spacing={{ base: '34px', lg: '20px' }}>
                  <Button w="10rem" color="white" fontSize="12px">
                    View Contract
                  </Button>
                  <Button w="10rem" bg="black" color="white" fontSize="12px">
                    Claim Contract
                  </Button>
                </Stack>
              </VStack>
              <VStack
                w="full"
                pr={{ base: 0, lg: '50px' }}
                align="start"
                spacing="20px">
                <Heading
                  m="0"
                  as="h2"
                  fontSize={{ base: SMALL_BASE_HEADING_SIZE, lg: '41px' }}
                  fontWeight="700">
                  Ways to Earn
                </Heading>
                <Text
                  m="0"
                  fontSize={{
                    base: SMALL_BASE_TEXT_SIZE,
                    lg: LARGE_BASE_TEXT_SIZE,
                  }}
                  lineHeight="20px">
                  To seed distribution initially, BANK was retroactively
                  airdropped to eligible Bankless Community members.
                </Text>
                <Text
                  m="0"
                  fontSize={{
                    base: SMALL_BASE_TEXT_SIZE,
                    lg: LARGE_BASE_TEXT_SIZE,
                  }}
                  lineHeight="20px">
                  Full membership in the DAO is contingent on holding 35000
                  BANK. There are several methods of acquiring BANK.
                </Text>
              </VStack>
            </VStack>
            <Box className="circular-hero">
              <Text className="bank-hero">B</Text>
            </Box>
          </Stack>
          <Grid
            w="full"
            gap={{ base: '20px', lg: '10px' }}
            alignItems="center"
            templateColumns={{ base: '100%', lg: '26px 1fr 26px 1fr' }}
            templateRows={{
              base: 'repeat(3, min-content) 0px repeat(4, min-content)',
              lg: 'repeat(4, 1fr)',
            }}>
            {/* Section 1 */}
            <Box
              h="100%"
              gridColumn="1"
              gridRow="1/6"
              borderLeft={{ base: 'none', lg: '2px dotted #2F3E4E' }}
              display={{ base: 'none', lg: 'initial' }}
            />
            <GridItem rowStart={1}>
              <Heading m="0" as="h3" fontSize="24px">
                Liquidity Pools
              </Heading>
            </GridItem>
            <GridItem rowStart={2}>
              <Text
                m="auto 0"
                textAlign="start"
                fontSize="14px"
                lineHeight="15px">
                BANK is available on both Sushiswap and Uniswap
              </Text>
            </GridItem>
            <Stack
              w="100%"
              align={{ base: 'center', lg: 'start' }}
              direction={{ base: 'row', lg: 'column' }}
              gridRow={{ base: 'auto', lg: '3/5' }}
              gridColumn={{ base: 'auto', lg: '4' }}
              spacing={{ base: '20px', lg: '12.5px' }}>
              <Button
                gridRow="3"
                w="min-content"
                m="auto 0"
                color="white"
                fontSize="12px">
                Uniswap Pool
              </Button>
              <Button
                gridRow={{ base: '3', lg: '4' }}
                w="min-content"
                m="auto 0"
                color="white"
                fontSize="12px">
                Sushiswap Pool
              </Button>
            </Stack>
            {/* Section 2 */}
            <Box
              h="100%"
              gridColumn={{ base: 'auto', lg: '3' }}
              gridRow={{ base: '4', lg: '1/6' }}
              borderLeft={{ base: 'none', lg: '2px dotted #2F3E4E' }}
            />
            <GridItem rowStart={{ base: 5, lg: 1 }}>
              <Heading m="0" as="h3" fontSize="24px">
                Contribute
              </Heading>
            </GridItem>
            <GridItem rowStart={{ base: 6, lg: 2 }}>
              <Text
                m="auto 0"
                textAlign="start"
                fontSize="13px"
                lineHeight="15px">
                Have an Idea to help the world go Bankless?
              </Text>
            </GridItem>
            <GridItem rowStart={{ base: 7, lg: 3 }}>
              <Text
                m="auto 0"
                textAlign="start"
                fontSize="13px"
                lineHeight="15px">
                Join the Discord. Get a Guest Pass and start contributing.
              </Text>
            </GridItem>
            <GridItem rowStart={{ base: 8, lg: 4 }}>
              <Button w="min-content" color="white" fontSize="12px">
                Join Discord
              </Button>
            </GridItem>
          </Grid>
          <VStack align="start" w="full">
            <Heading
              m="0"
              mb="20px"
              as="h2"
              size="l"
              fontSize={{ base: SMALL_BASE_HEADING_SIZE, lg: '41px' }}>
              Multisig Vaults
            </Heading>
            <Table maxWidth="full">
              <Thead>
                <Tr borderTop="1px solid white">
                  <Th
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}
                    color="white"
                    textTransform="none">
                    #
                  </Th>
                  <Th className="vault-item" color="white" textTransform="none">
                    Guild
                  </Th>
                  <Th className="vault-item" color="white" textTransform="none">
                    Address
                  </Th>
                  <Th display={{ base: 'none', lg: 'table-cell' }} />
                </Tr>
              </Thead>
              <Tbody>
                <Tr maxWidth="100%">
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    1
                  </Td>
                  <Td className="vault-item">Developer&apos;s Guild</Td>
                  <Td className="vault-item">
                    <div className="flex-between">
                      <span>0x8a3</span>
                      <span className="dash-fill" />
                      <span className="no-flex-shrink">9BD8F637</span>
                    </div>
                  </Td>
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    View
                  </Td>
                </Tr>
                <Tr maxWidth="100%">
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    2
                  </Td>
                  <Td className="vault-item">Writer&apos;s Guild</Td>
                  <Td className="vault-item">
                    <div className="flex-between">
                      <span>0x8a3</span>
                      <span className="dash-fill" />
                      <span className="no-flex-shrink">9BD8F637</span>
                    </div>
                  </Td>
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    View
                  </Td>
                </Tr>
                <Tr maxWidth="100%">
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    3
                  </Td>
                  <Td className="vault-item">Operation&apos;s Guild</Td>
                  <Td className="vault-item">
                    <div className="flex-between">
                      <span>0x8a3</span>
                      <span className="dash-fill" />
                      <span className="no-flex-shrink">BD8F637</span>
                    </div>
                  </Td>
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    View
                  </Td>
                </Tr>
                <Tr maxWidth="100%">
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    4
                  </Td>
                  <Td className="vault-item">Designer&apos;s Guild</Td>
                  <Td className="vault-item">
                    <div className="flex-between">
                      <span>0x8a3</span>
                      <span className="dash-fill" />
                      <span className="no-flex-shrink">9BD8F637</span>
                    </div>
                  </Td>
                  <Td
                    className="vault-item"
                    display={{ base: 'none', lg: 'table-cell' }}>
                    View
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
        </VStack>
      </Container>
    </chakra.main>
  );
}
