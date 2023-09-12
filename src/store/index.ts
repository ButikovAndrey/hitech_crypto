import { createContext, useContext } from "react";
import { CurrencyStore } from "./currencyStore/currencyStore";
import { CoinsStore } from "./coinsStore/coinsStore";
import { GraphStore } from "./graphStore/graphStore";
import { BookmarkStore } from "./bookmarkStore/bookmarkStore";

export class Store {
  currencyStore: CurrencyStore;

  coinsStore: CoinsStore;

  graphStore: GraphStore;

  bookmarkStore: BookmarkStore;

  constructor() {
    this.currencyStore = new CurrencyStore();
    this.coinsStore = new CoinsStore(this);
    this.graphStore = new GraphStore(this);
    this.bookmarkStore = new BookmarkStore();
  }
}

export const StoreContext = createContext<Store>(null as never);

export const useStore = () => {
  return useContext(StoreContext);
};

export const storeInstance = new Store();
