import React, { SyntheticEvent } from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import styles from "./Bookmark.module.scss";
import { useStore } from "../../store";

type PropsType = {
  id: string;
  className?: string;
  onClick?: () => void;
};

export const Bookmark = observer(({ id, onClick, className }: PropsType) => {
  const { bookmarkStore } = useStore();
  const onCaptureClick = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    bookmarkStore.updateBookmarkList(id);
    onClick?.();
  };

  if (bookmarkStore.favouriteCoins.includes(id))
    return (
      <span
        onClickCapture={onCaptureClick}
        className={classNames(styles.bookmark__symbol, className)}
      >
        &#9733;
      </span>
    );
  return (
    <span
      onClickCapture={onCaptureClick}
      className={classNames(styles.bookmark__symbol, className)}
    >
      &#9734;
    </span>
  );
});
