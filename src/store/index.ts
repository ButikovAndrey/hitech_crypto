import { createContext, useContext } from "react";
import { CurrencyStore } from "./currencyStore/currencyStore";
import { CoinsStore } from "./coinsStore/coinsStore";

export class Store {
  currencyStore: CurrencyStore;

  coinsStore: CoinsStore;

  constructor() {
    this.currencyStore = new CurrencyStore();
    this.coinsStore = new CoinsStore(this);
  }
}

export const StoreContext = createContext<Store>(null as never);

export const useStore = () => {
  return useContext(StoreContext);
};

export const storeInstance = new Store();
