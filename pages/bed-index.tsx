// next imports
import Head from 'next/head';

// chakra imports
import { Box, Button, Flex, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/react';

// component imports
import PriceChart from '../components/PriceChart';

// image imports
import BedIndexImg from '../public/images/bed-index.png';
import TokenMaskImg from '../public/images/token-mask.svg';
import TokenMask2Img from '../public/images/token-mask-2.svg';

export default function BedIndex() {
  return (
    <>
      <Head>
        <title>Bed Index | Bankless DAO</title>
      </Head>
      <Flex flexDir="column" marginBottom="8vh" overflow="hidden">
        {/* About BED */}
        <Box>
          <Heading
            as="h1"
            fontSize={65}
            fontWeight="bold"
            fontFamily="spartan"
          >
            About BED
          </Heading>
          <Text m="13px 0 26px 0" fontSize={14} fontFamily="spartan">
            The BED Index seeks to give exposure to the most promising use cases <br />
            in crypto: store of value, programmable money, and decentralized finance.
          </Text>
          <HStack spacing={3}>
            <Button variant="red">Buy on Uniswap</Button>
            <Button variant="black">Add to Metamask</Button>
          </HStack>
        </Box>

        {/* Methodology */}
        <Grid mt={10} templateColumns="1fr 1fr" gap={6}>
          <Box>
            <Heading as="h2" fontSize={41} fontFamily="spartan">Methodology</Heading>
            <Text mb={26} fontSize={14} fontFamily="spartan">
              BED Index is composed from 33.3% <br /> of Bitcoin, 33.3% of Ether, and 33.3% of DPI.
              <br /><br />
              Index is rebalanced every first Friday of each calendar month. <br /> The Fund is rebalanced in accordance with its Underlying Index.
            </Text>
            <Button variant="black">More Info</Button>
          </Box>
          <Flex pos="relative" justify="center">
            <Box
              width={240}
              height={240}
              zIndex={2}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundImage={BedIndexImg.src}
            />
            <TokenMaskImg style={{ zIndex: 1, position: 'absolute', top: '-40px' }} />
            <TokenMask2Img style={{ position: 'absolute', top: '-40px', left: '10%' }} />
          </Flex>
        </Grid>

        {/* Stats */}
        <VStack mt={10} spacing={7} align="flex-start">
          <Heading as="h2" fontSize={41} fontFamily="spartan" mb={0}>Stats</Heading>
          <HStack m={0} spacing={7}>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>Market Cap</Text>
              <Text mt="0 !important">$4.8M</Text>
            </VStack>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>Current Supply</Text>
              <Text mt="0 !important">--</Text>
            </VStack>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>Volume</Text>
              <Text mt="0 !important">$35.6K</Text>
            </VStack>
          </HStack>
          <HStack spacing={3} align="flex-end">
            <Heading as="h3" fontFamily="spartan" mt={5}>$169.91</Heading>
            <Text color={"limegreen"} fontFamily="spartan" fontWeight="semibold">16.58%</Text>
          </HStack>
          <Box spacing={3} w="full" h={260}>
            <PriceChart
              data={[{timestamp: 1636227751, price: 169.95}, {timestamp: 1636227798, price: 149.95}]}
              setActivePrice={(activePrice) => console.log(activePrice)}
            />
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
