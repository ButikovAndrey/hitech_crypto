import { makeAutoObservable } from "mobx";
import { favouriteCoins } from "../../helpers/bookmarks";

export class BookmarkStore {
  private _favouriteCoins: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get favouriteCoins() {
    return this._favouriteCoins;
  }

  set favouriteCoins(value) {
    this._favouriteCoins = value;
  }

  initBookmarks() {
    const storeData = window.localStorage.getItem(favouriteCoins);
    let bookmarkArray;
    if (storeData) {
      bookmarkArray = JSON.parse(storeData);
    }
    if (Array.isArray(bookmarkArray)) {
      this.favouriteCoins = bookmarkArray;
    } else {
      window.localStorage.setItem(
        favouriteCoins,
        JSON.stringify(this.favouriteCoins),
      );
    }
  }

  updateBookmarkList(id: string) {
    if (this.favouriteCoins.includes(id)) {
      this.favouriteCoins = [...this.favouriteCoins].filter((el) => el !== id);
    } else {
      this.favouriteCoins = [...this.favouriteCoins, id];
    }
    window.localStorage.setItem(
      favouriteCoins,
      JSON.stringify(this.favouriteCoins),
    );
  }
}
