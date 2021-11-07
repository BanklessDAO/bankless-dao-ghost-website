// next imports
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

// component imports
import PriceChart, { PriceData } from '../components/PriceChart';
import PortfolioChart, { PortfolioData } from '../components/PortfolioChart';

// api imports
import { getTokenTotalSupply, getTokenPriceData, getTokenRangePriceData } from '../lib/tokens';

// image imports
import BedIndexImg from '../public/images/bed-index.png';
import TokenMaskImg from '../public/images/token-mask.svg';
import TokenMask2Img from '../public/images/token-mask-2.svg';
import formatNumber from '../util/formatNumber';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function BedIndex({
  bedTotalSupply,
  bedPriceData
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [priceData, setPriceData] = useState<PriceData[]>(bedPriceData);

  const [firstPrice, setFirstPrice] = useState<PriceData>(priceData[0]);
  const [lastPrice, setLastPrice] = useState<PriceData>(priceData[priceData.length - 1]);
  const [activePrice, setActivePrice] = useState<PriceData>(lastPrice);

  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);
  const [startDay, setStartDay] = useState<string>();
  const [investedValue, setInvestedValue] = useState<number>(0);

  const [days, setDays] = useState<number>(30);

  useEffect(() => {
    getTokenPriceData('bankless-bed-index', days)
      .then(data => setPriceData(data))
      .catch(() => {
        setPriceData(bedPriceData);
        setDays(30);
      })
  }, [days]);

  useEffect(() => {
    setFirstPrice(priceData[0]);
    setLastPrice(priceData[priceData.length - 1]);
    setActivePrice(priceData[priceData.length - 1]);
  }, [priceData]);

  const getPercentageChange = () => {
    const priceChange = activePrice.price - firstPrice.price;
    const pricePercentageChange = (priceChange / firstPrice.price) * 100;

    return pricePercentageChange.toFixed(2);
  }

  const calculateGainLoss = () => {
    if (!startDay || !investedValue) return;

    const from = moment(startDay).valueOf() / 1000;
    const to = lastPrice.timestamp / 1000;

    getTokenRangePriceData('bankless-bed-index', from, to)
      .then(data => {
        const portfolioValueData: PortfolioData[] = [];
        const bedValue = investedValue / data[0].price;

        data.map(({timestamp, price}) => {
          portfolioValueData.push({
            timestamp,
            value: price * bedValue
          })
        });

        setPortfolioData(portfolioValueData);
        console.log(portfolioValueData);
      })
      .catch(() => {});
  };

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
              <Text mt="0 !important">${formatNumber(activePrice.market_cap)}</Text>
            </VStack>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>Current Supply</Text>
              <Text mt="0 !important">{formatNumber(bedTotalSupply)}</Text>
            </VStack>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>Volume</Text>
              <Text mt="0 !important">${formatNumber(activePrice.total_volume)}</Text>
            </VStack>
          </HStack>
          <HStack spacing={3} align="flex-end">
            <Heading as="h3" fontFamily="spartan" mt={5}>${activePrice.price.toFixed(2)}</Heading>
            <Text color={getPercentageChange() > 0 ? "limegreen" : "red.500"} fontFamily="spartan" fontWeight="semibold">
              {getPercentageChange()}%
            </Text>
          </HStack>
          <Text mt="0 !important">{moment(activePrice.timestamp).format('DD MMMM, YYYY')}</Text>
          <Box spacing={3} w="full" h={260}>
            <PriceChart
              data={priceData}
              setActivePrice={(activePriceData) => setActivePrice(activePriceData)}
            />
          </Box>
          <HStack spacing={3} alignSelf="flex-end">
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 7 ? "red.500": "black"}
              onClick={() => setDays(7)}
            >
              1W
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 30 ? "red.500": "black"}
              onClick={() => setDays(30)}
            >
              1M
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 90 ? "red.500": "black"}
              onClick={() => setDays(90)}
            >
              3M
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 180 ? "red.500": "black"}
              onClick={() => setDays(180)}
            >
              6M
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 365 ? "red.500": "black"}
              onClick={() => setDays(365)}
            >
              1Y
            </Button>
          </HStack>
        </VStack>

        {/* Gain/Loss Calculator */}
        <VStack mt={10} spacing={7} align="flex-start">
          <Heading as="h2" fontSize={41} fontFamily="spartan" mb={0}>Gain/Loss Calculator</Heading>

          <Flex w="full">
            <Box flex={7} px={2}>
              <PortfolioChart
                data={portfolioData}
                setActiveValue={activeValue => console.log(activeValue)}
              />
            </Box>
            <Box flex={3} px={2}>
              <VStack spacing={4} p={4} bg="#1E2732">
                <Box w="full">
                  <Text mb={2}>Start Date</Text>
                  <Input
                    type="date"
                    variant="solid"
                    value={startDay}
                    max={moment().format('YYYY-MM-DD')}
                    onChange={e => setStartDay(e.target.value)}
                  />
                </Box>
                <Box w="full">
                  <Text mb={2}>Amount</Text>
                  <InputGroup variant="solid">
                    <Input
                      type="number"
                      value={investedValue}
                      onChange={e => setInvestedValue(parseInt(e.target.value))}
                      placeholder="Amount"
                    />
                    <InputRightAddon children="USD" />
                  </InputGroup>
                </Box>
                <Button
                  marginTop="1.5rem !important"
                  w="full"
                  variant="red"
                  onClick={() => calculateGainLoss()}
                >
                  Calculate
                </Button>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  const bedTotalSupply: number = await getTokenTotalSupply('bankless-bed-index');
  const bedPriceData: PriceData[] = await getTokenPriceData('bankless-bed-index', 30);

  if (!bedTotalSupply) {
    return { props: { notFound: true } };
  }

  return {
    props: {
      bedTotalSupply,
      bedPriceData,
    },
  };
}
