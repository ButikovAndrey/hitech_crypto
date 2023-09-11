import { CURRENCY_LABELS } from "./currency";

export interface CoinsListItemType {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

export interface CoinsSingleData {
  id: string;
  symbol: string;
  name: string;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  localization: object;
  description: { en: string };
  links: object;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: {
    current_price: Record<CURRENCY_LABELS & string, number>;
    market_cap: Record<CURRENCY_LABELS & string, number>;
    total_volume: Record<CURRENCY_LABELS & string, number>;
    fully_diluted_valuation: Record<CURRENCY_LABELS & string, number>;
    total_value_locked: {
      btc: number;
      usd: number;
    };
    fdv_to_tvl_ratio: number;
    mcap_to_tvl_ratio: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
  };
  community_data: {
    facebook_likes: null | number;
    twitter_followers: number;
    reddit_average_posts_48h: number;
    reddit_average_comments_48h: number;
    reddit_subscribers: number;
    reddit_accounts_active_48h: string;
  };
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    code_additions_deletions_4_weeks: { additions: number; deletions: number };
    commit_count_4_weeks: number;
  };
  public_interest_stats: { alexa_rank: number; bing_matches: null };
  last_updated: string;
}

export interface CoinsHistoryData {
  market_caps: number[][];
  prices: number[][];
  total_volumes: number[][];
}

export const initialCoin = {
  ath: 69045,
  ath_change_percentage: -62.49598,
  ath_date: "2021-11-10T14:24:11.849Z",
  atl: 67.81,
  atl_change_percentage: 38087.50239,
  atl_date: "2013-07-06T00:00:00.000Z",
  circulating_supply: 19481806,
  current_price: 25862,
  fully_diluted_valuation: 543172644031,
  high_24h: 25904,
  id: "bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  last_updated: "2023-09-10T22:11:55.375Z",
  low_24h: 25669,
  market_cap: 503904003596,
  market_cap_change_24h: -355919457.5897217,
  market_cap_change_percentage_24h: -0.07058,
  market_cap_rank: 1,
  max_supply: 21000000,
  name: "Bitcoin",
  price_change_24h: -27.42490397797519,
  price_change_percentage_24h: -0.10593,
  price_change_percentage_24h_in_currency: -0.10592943565639183,
  roi: null,
  symbol: "btc",
  total_supply: 21000000,
  total_volume: 6451288794,
};

export const responsiveParams = {
  // from 0 pixels
  0: {
    items: 2,
  },

  // from 512 pixels
  512: {
    items: 4,
  },
};

export function numberWithCommas(value: number | string) {
  if (typeof value === "number") {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const minute = 60000;
