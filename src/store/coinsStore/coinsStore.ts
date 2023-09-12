import { makeAutoObservable, runInAction } from "mobx";
import { Store } from "../index";
import { CoinsApi } from "../../api/controllers/CoinsApi";
import {
  CoinsSingleData,
  CoinsListItemType,
  initialCoin,
} from "../../helpers/coins";

export class CoinsStore {
  private rootStore;

  private _coinsList: CoinsListItemType[] = [initialCoin];

  private _filteredCoinsList: CoinsListItemType[] = [initialCoin];

  private _coinInfo: CoinsSingleData = {} as CoinsSingleData;

  private _isLoading = false;

  constructor(rootStore: Store) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get coinsList() {
    return this._coinsList;
  }

  set coinsList(value) {
    this._coinsList = value;
  }

  get coinInfo() {
    return this._coinInfo;
  }

  set coinInfo(value) {
    this._coinInfo = value;
  }

  get filteredCoinsList() {
    return this._filteredCoinsList;
  }

  set filteredCoinsList(value) {
    this._filteredCoinsList = value;
  }

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value) {
    this._isLoading = value;
  }

  async getCoinList() {
    try {
      this.isLoading = true;
      const { data } = await CoinsApi.getCoinList(
        this.rootStore.currencyStore.selectedCurrency.label,
      );
      runInAction(() => {
        this.coinsList = data;
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }

  async getSingleCoin(id: string) {
    try {
      this.isLoading = true;
      const { data } = await CoinsApi.getSingleCoin(
        id,
        this.rootStore.currencyStore.selectedCurrency.label,
      );
      runInAction(() => {
        this.coinInfo = data;
      });
    } catch (err) {
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }

  filterCoinsTable(filter = "") {
    if (filter) {
      this.filteredCoinsList = [...this.coinsList].filter(
        (coin) =>
          coin.name.toLowerCase().includes(filter) ||
          coin.symbol.toLowerCase().includes(filter),
      );
    } else this.filteredCoinsList = this.coinsList;
  }

  async initCoins() {
    await this.getCoinList();
    this.filterCoinsTable();
  }
}
