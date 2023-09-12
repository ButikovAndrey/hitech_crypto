import { makeAutoObservable } from "mobx";
import { Store } from "../index";
import { CoinsApi } from "../../api/controllers/CoinsApi";
import { CoinsHistoryData } from "../../helpers/coins";
import { DaysType } from "../../helpers/tables";

export class GraphStore {
  private rootStore;

  private _chartPrices: Pick<CoinsHistoryData, "prices"> = { prices: [] };

  private _timePeriod: DaysType = { label: "24 Hours", value: 1 };

  private _isLoading = false;

  constructor(rootStore: Store) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get chartPrices() {
    return this._chartPrices;
  }

  set chartPrices(value) {
    this._chartPrices = value;
  }

  get timePeriod() {
    return this._timePeriod;
  }

  set timePeriod(value) {
    this._timePeriod = value;
  }

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value) {
    this._isLoading = value;
  }

  async getHistoricalChart(id: string) {
    try {
      this.isLoading = true;
      const options = {
        id,
        currency: this.rootStore.currencyStore.selectedCurrency.label,
        days: this.timePeriod.value,
      };
      const { data } = await CoinsApi.getHistoricalChart(options);
      this.chartPrices = data;
    } catch (err) {
      console.error(err);
    } finally {
      this.isLoading = false;
    }
  }
}
