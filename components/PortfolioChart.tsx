import { ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import { Box, Flex, Text } from '@chakra-ui/react';

export interface PortfolioData {
  timestamp: number,
  value: number
}

export interface PortfolioChartProps {
  data: PortfolioData[]
  setActiveValue: (activeValue: PortfolioData) => void
}

export default function PortfolioChart({
  data,
  setActiveValue
}: PortfolioChartProps): JSX.Element {
  if (data.length === 0) return (
    <Flex w="full" h="full" align="center" justify="center">
      <Box py={2} px={4} bg="#1E2732">
        <Text m="0 !important" fontSize="sm">Select Start Date & Amount</Text>
      </Box>
    </Flex>
  );

  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        onMouseLeave={() => setActiveValue(data[data.length - 1])}
      >
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF1A1A" stopOpacity={1} />
            <stop offset="100%" stopColor="#FF1A1A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#FF1A1A"
          strokeWidth={3}
          fill="url(#linear)"
        />
        <Tooltip
          // @ts-ignore
          content={({ payload }) => {
            if (payload && payload.length > 0)
              setActiveValue(payload[0].payload);

            return null;
          }}
          cursor={{
            strokeDasharray: "7 7",
            strokeLinecap: "round",
            strokeWidth: "3px",
            strokeOpacity: 0.5,
            stroke: "#ffffff"
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}