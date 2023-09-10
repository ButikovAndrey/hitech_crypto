import { makeAutoObservable } from "mobx";
import { Store } from "../index";
import { CURRENCY_LABELS } from "../../helpers/currency";

export class CoinsStore {
  private rootStore;

  private _currencies: Record<
    string,
    { label: CURRENCY_LABELS; symbol: string }
  > = {
    usd: { label: CURRENCY_LABELS.USD, symbol: "$" },
    eur: { label: CURRENCY_LABELS.EUR, symbol: "€" },
    gbp: { label: CURRENCY_LABELS.GBP, symbol: "£" },
  };

  private _selectedCurrency: CURRENCY_LABELS = CURRENCY_LABELS.USD;

  constructor(rootStore: Store) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  get currencies() {
    return this._currencies;
  }

  get selectedCurrency() {
    return this._selectedCurrency;
  }

  set selectedCurrency(value: CURRENCY_LABELS) {
    this._selectedCurrency = value;
  }

  getCurrencySymbol = () => {
    return this.currencies[this.selectedCurrency];
  };
}
