import { makeAutoObservable } from "mobx";
import { CURRENCY_LABELS, currencyDataType } from "../../helpers/currency";

export class CurrencyStore {
  private _currencyList: Record<string, currencyDataType> = {
    usd: { label: CURRENCY_LABELS.USD, symbol: "$" },
    eur: { label: CURRENCY_LABELS.EUR, symbol: "€" },
    cny: { label: CURRENCY_LABELS.CNY, symbol: "¥" },
  };

  private _selectedCurrency: currencyDataType = {
    label: CURRENCY_LABELS.USD,
    symbol: "$",
  };

  constructor() {
    makeAutoObservable(this);
  }

  get currencyList() {
    return this._currencyList;
  }

  get selectedCurrency() {
    return this._selectedCurrency;
  }

  set selectedCurrency(value: currencyDataType) {
    this._selectedCurrency = value;
  }

  setCurrency = (label: CURRENCY_LABELS) => {
    this.selectedCurrency = this.currencyList[label];
  };
}
