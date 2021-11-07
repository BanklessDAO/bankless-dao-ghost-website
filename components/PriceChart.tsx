import {ResponsiveContainer, AreaChart, Area, Tooltip} from 'recharts';

export interface PriceData {
  timestamp: number,
  price: number,
  market_cap: number,
  total_volume: number
}

export interface PriceChartProps {
  data: PriceData[]
  setActivePrice: (activePrice: PriceData) => void
}

export default function PriceChart({
  data,
  setActivePrice
}: PriceChartProps): JSX.Element {
  return (
    <>
      <ResponsiveContainer width="100%">
        <AreaChart
          data={data}
          onMouseLeave={() => setActivePrice(data[data.length - 1])}
        >
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF1A1A" stopOpacity={1} />
              <stop offset="100%" stopColor="#FF1A1A" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            stroke="#FF1A1A"
            strokeWidth={3}
            fill="url(#linear)"
          />
          <Tooltip
            // @ts-ignore
            content={({ payload }) => {
              if (payload && payload.length > 0)
                setActivePrice(payload[0].payload);

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
    </>
  )
}