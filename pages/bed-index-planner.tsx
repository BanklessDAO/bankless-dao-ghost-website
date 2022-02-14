// next imports
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// chakra imports
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  VStack,
} from '@chakra-ui/react';

// component imports
import PriceChart, { PriceData } from '../components/PriceChart';
import PortfolioChart, { PortfolioData } from '../components/PortfolioChart';

// api imports
import {
  getTokenTotalSupply,
  getTokenPriceData,
  getTokenRangePriceData,
} from '../lib/tokens';
import { addBedIndexToMetaMask } from '../lib/web3';

// image imports
import BedIndexImg from '../public/images/bed-index.png';
import TokenMaskImg from '../public/images/token-mask.svg';
import TokenMask2Img from '../public/images/token-mask-2.svg';
import formatNumber from '../util/formatNumber';
import moment from 'moment';

export default function BedIndex({
  bedTotalSupply,
  bedPriceData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [priceData, setPriceData] = useState<PriceData[]>(bedPriceData);

  const [firstPrice, setFirstPrice] = useState<PriceData>(priceData[0]);
  const [lastPrice, setLastPrice] = useState<PriceData>(
    priceData[priceData.length - 1],
  );
  const [activePrice, setActivePrice] = useState<PriceData>(lastPrice);

  const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);

  const [startDay, setStartDay] = useState<string>();
  const [investedValue, setInvestedValue] = useState<number>(0);

  const [currentStartDay, setCurrentStartDay] = useState<string>();
  const [currentInvestedValue, setCurrentInvestedValue] = useState<number>(0);

  const [activePortfolioData, setActivePortfolioData] =
    useState<PortfolioData>();

  const [days, setDays] = useState<number>(30);

  useEffect(() => {
    getTokenPriceData('bankless-bed-index', days)
      .then((data) => setPriceData(data))
      .catch(() => {
        setPriceData(bedPriceData);
        setDays(30);
      });
  }, [days, bedPriceData]);

  useEffect(() => {
    setFirstPrice(priceData[0]);
    setLastPrice(priceData[priceData.length - 1]);
    setActivePrice(priceData[priceData.length - 1]);
  }, [priceData]);

  useEffect(() => {
    if (portfolioData) {
      setActivePortfolioData(portfolioData[portfolioData.length - 1]);
    }
  }, [portfolioData]);

  const getPercentageChange = (startPrice: number, endPrice: number) => {
    const priceChange = endPrice - startPrice;
    const pricePercentageChange = (priceChange / startPrice) * 100;

    return parseInt(pricePercentageChange.toFixed(2));
  };

  const calculateGainLoss = () => {
    if (!startDay || !investedValue) return;

    setCurrentStartDay(startDay);
    setCurrentInvestedValue(investedValue);

    const from = moment(startDay).valueOf() / 1000;
    const to = lastPrice.timestamp / 1000;

    getTokenRangePriceData('bankless-bed-index', from, to)
      .then((data) => {
        const portfolioValueData: PortfolioData[] = [];
        const bedValue = investedValue / data[0].price;

        data.map(({ timestamp, price }) => {
          portfolioValueData.push({
            timestamp,
            value: price * bedValue,
          });
        });

        setPortfolioData(portfolioValueData);
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
          <Heading as="h1" fontSize={65} fontWeight="bold" fontFamily="spartan">
            About BED
          </Heading>
          <Text m="13px 0 26px 0" fontSize={14} fontFamily="spartan">
            The BED Index seeks to give exposure to the most promising use cases{' '}
            <br />
            in crypto: store of value, programmable money, and decentralized
            finance.
          </Text>
          <HStack spacing={3}>
            <Button
              variant="red"
              as="a"
              target="_blank"
              href="https://app.uniswap.org/#/swap?inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&outputCurrency=0x2af1df3ab0ab157e1e2ad8f88a7d04fbea0c7dc6">
              Buy on Uniswap
            </Button>
            <Button variant="black" onClick={addBedIndexToMetaMask}>
              Add to Metamask
            </Button>
          </HStack>
        </Box>

        {/* Methodology */}
        <Flex
          mt={10}
          flexDirection={{
            base: 'column-reverse',
            sm: 'column-reverse',
            lg: 'row',
          }}>
          <Box width={{ base: '100%', sm: '100%', lg: '50%' }}>
            <Heading as="h2" fontSize={41} fontFamily="spartan">
              Methodology
            </Heading>
            <Text mb={26} fontSize={14} fontFamily="spartan">
              BED Index is composed from 33.3% <br /> of Bitcoin, 33.3% of
              Ether, and 33.3% of DPI.
              <br />
              <br />
              Index is rebalanced every first Friday of each calendar month.{' '}
              <br /> The Fund is rebalanced in accordance with its Underlying
              Index.
            </Text>
            <Button
              variant="black"
              as="a"
              href="https://www.indexcoop.com/bankless-bed-index.html"
              target="_blank">
              More Info
            </Button>
          </Box>
          <Flex
            width={['100%', '50%']}
            my={{ base: 10, sm: 10, lg: 0 }}
            pos="relative"
            justify="center">
            <Box
              width={240}
              height={240}
              zIndex={2}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundImage={BedIndexImg.src}
            />
            <TokenMaskImg
              style={{
                zIndex: 1,
                position: 'absolute',
                top: '-40px',
              }}
            />
            <TokenMask2Img
              style={{ position: 'absolute', top: '-40px', left: '10%' }}
            />
          </Flex>
        </Flex>

        {/* Stats */}
        <VStack mt={10} spacing={7} align="flex-start">
          <Heading as="h2" fontSize={41} fontFamily="spartan" mb={0}>
            Stats
          </Heading>
          <HStack m={0} spacing={7}>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>
                Market Cap
              </Text>
              <Text mt="0 !important">
                ${formatNumber(activePrice.market_cap)}
              </Text>
            </VStack>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>
                Current Supply
              </Text>
              <Text mt="0 !important">{formatNumber(bedTotalSupply)}</Text>
            </VStack>
            <VStack align="flex-start">
              <Text as="h6" size="sm" fontWeight="bold" m={0}>
                Volume
              </Text>
              <Text mt="0 !important">
                ${formatNumber(activePrice.total_volume)}
              </Text>
            </VStack>
          </HStack>
          <HStack spacing={3} align="flex-end">
            <Heading as="h3" fontFamily="spartan" mt={5}>
              ${activePrice.price.toFixed(2)}
            </Heading>
            <Text
              color={
                getPercentageChange(firstPrice.price, activePrice.price) > 0
                  ? 'limegreen'
                  : 'red.500'
              }
              fontFamily="spartan"
              fontWeight="semibold">
              {getPercentageChange(firstPrice.price, activePrice.price)}%
            </Text>
          </HStack>
          <Text mt="0 !important">
            {moment(activePrice.timestamp).format('DD MMMM, YYYY')}
          </Text>
          <Box w="full" h={260}>
            <PriceChart
              data={priceData}
              setActivePrice={(activePriceData) =>
                setActivePrice(activePriceData)
              }
            />
          </Box>
          <HStack spacing={3} alignSelf="flex-end">
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 7 ? 'red.500' : 'black'}
              onClick={() => setDays(7)}>
              1W
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 30 ? 'red.500' : 'black'}
              onClick={() => setDays(30)}>
              1M
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 90 ? 'red.500' : 'black'}
              onClick={() => setDays(90)}>
              3M
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 180 ? 'red.500' : 'black'}
              onClick={() => setDays(180)}>
              6M
            </Button>
            <Button
              variant="black"
              p="16px 14px 10px 14px"
              bg={days === 365 ? 'red.500' : 'black'}
              onClick={() => setDays(365)}>
              1Y
            </Button>
          </HStack>
        </VStack>

        {/* Gain/Loss Calculator */}
        <VStack mt={10} spacing={7} align="flex-start">
          <Heading as="h2" fontSize={41} fontFamily="spartan" mb={0}>
            Gain/Loss Calculator
          </Heading>

          <HStack spacing={3} align="flex-end">
            <Heading as="h3" fontFamily="spartan" mt={5}>
              {activePortfolioData &&
                `$${activePortfolioData.value.toFixed(2)}`}
            </Heading>
            <Text
              fontFamily="spartan"
              fontWeight="semibold"
              color={
                getPercentageChange(
                  currentInvestedValue,
                  activePortfolioData?.value || 0,
                ) > 0
                  ? 'limegreen'
                  : 'red.500'
              }>
              {activePortfolioData &&
                `${getPercentageChange(
                  currentInvestedValue,
                  activePortfolioData?.value,
                )}%`}
            </Text>
          </HStack>
          {activePortfolioData && (
            <Text mt="0 !important">
              {moment(currentStartDay).format('DD MMMM, YYYY')}
              &nbsp;-&nbsp;
              {moment(activePortfolioData.timestamp).format('DD MMMM, YYYY')}
            </Text>
          )}
          <Flex
            w="full"
            alignItems="center"
            flexDirection={{ base: 'column', sm: 'column', lg: 'row' }}>
            <Box w={{ base: '100%', sm: '100%', lg: '60%', xl: '70%' }} px={2}>
              <PortfolioChart
                data={portfolioData}
                setActiveValue={(activeData) =>
                  setActivePortfolioData(activeData)
                }
              />
            </Box>
            <Box w={{ base: '100%', sm: '100%', lg: '40%', xl: '30%' }} px={2}>
              <VStack spacing={4} p={4} bg="#1E2732">
                <Box w="full">
                  <Text mb={2}>Start Date</Text>
                  <Input
                    type="date"
                    variant="solid"
                    value={startDay}
                    max={moment().format('YYYY-MM-DD')}
                    onChange={(e) => setStartDay(e.target.value)}
                  />
                </Box>
                <Box w="full">
                  <Text mb={2}>Amount</Text>
                  <InputGroup variant="solid">
                    <Input
                      type="number"
                      value={investedValue}
                      onChange={(e) =>
                        setInvestedValue(parseInt(e.target.value))
                      }
                      placeholder="Amount"
                    />
                    <InputRightAddon>USD</InputRightAddon>
                  </InputGroup>
                </Box>
                <Button
                  marginTop="1.5rem !important"
                  w="full"
                  variant="red"
                  onClick={() => calculateGainLoss()}>
                  Calculate
                </Button>
              </VStack>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  const bedTotalSupply: number = await getTokenTotalSupply(
    'bankless-bed-index',
  );
  const bedPriceData: PriceData[] = await getTokenPriceData(
    'bankless-bed-index',
    30,
  );

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
