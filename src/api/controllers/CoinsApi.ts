import Api from "../utils/api";

type HistoryProps = {
  id: string | number;
  currency: string;
  days: string | number;
};

export class CoinsApi {
  static getCoinList(currency: string | number) {
    return Api.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
    );
  }

  static getSingleCoin(id: string | number) {
    return Api.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  }

  static getHistoricalChart({ id, currency, days = 365 }: HistoryProps) {
    return Api.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`,
    );
  }

  static getTrendingCoins(currency: string) {
    return Api.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`,
    );
  }
}
