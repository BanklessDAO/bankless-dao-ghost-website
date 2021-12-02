import api from './coingecko-api';
import { PriceData } from '../components/PriceChart';

export const getTokenTotalSupply = (tokenId: string): Promise<number> => new Promise<number>(((resolve, reject) => {
  api.get(`/coins/${tokenId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`)
    .then(res => resolve(res.data.market_data.circulating_supply))
    .catch(() => reject(null));
}));

export const getTokenPriceData = (
  tokenId: string,
  days: number | 'max',
  interval: string = 'daily'
): Promise<PriceData[]> => new Promise<PriceData[]>(((resolve, reject) => {
  api.get(`/coins/${tokenId}/market_chart?vs_currency=usd&days=${days}&interval=${interval}`)
    .then(res => {
      let data: PriceData[] = [];

      res.data.prices.map((price: number[], idx: number) => {
        data.push({
          timestamp: price[0],
          price: price[1],
          market_cap: res.data.market_caps[idx][1],
          total_volume: res.data.total_volumes[idx][1]
        })
      });

      resolve(data);
    })
    .catch(() => reject(null));
}));

export interface SimplePriceData {
  timestamp: number,
  price: number
}

export const getTokenRangePriceData = (
  tokenId: string,
  from: number,
  to: number
): Promise<SimplePriceData[]> => new Promise<SimplePriceData[]>(((resolve, reject) => {
  api.get(`/coins/${tokenId}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`)
    .then(res => {
      const data: SimplePriceData[] = [];
      const resData: number[][] = res.data.prices;

      resData.map(price => {
        data.push({
          timestamp: price[0],
          price: price[1]
        });
      });

      resolve(data);
    })
    .catch(() => reject(null));
}));
