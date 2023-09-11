import Api from "../utils/api";
import {
  CoinsHistoryData,
  CoinsListItemType,
  CoinsSingleData,
} from "../../helpers/coins";
import { CURRENCY_LABELS } from "../../helpers/currency";

type HistoryProps = {
  id: string | number;
  currency: CURRENCY_LABELS;
  days: number;
};

export class CoinsApi {
  static getCoinList(currency: CURRENCY_LABELS) {
    return Api.get<CoinsListItemType[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    );
  }

  static getSingleCoin(id: string, currency: CURRENCY_LABELS) {
    return Api.get<CoinsSingleData>(
      `https://api.coingecko.com/api/v3/coins/${id}?vs_currency=${currency}`,
    );
  }

  static getHistoricalChart({ id, currency, days }: HistoryProps) {
    return Api.get<CoinsHistoryData>(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`,
    );
  }

  static getTrendingCoins(currency: string) {
    return Api.get<CoinsListItemType[]>(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`,
    );
  }
}
