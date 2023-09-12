import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { Bookmark } from "../bookmark";
import styles from "./Header.module.scss";

export const BookmarkPopup = observer(() => {
  const { bookmarkStore } = useStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const slotProps = {
    paper: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: "20ch",
      },
    },
  };

  if (!bookmarkStore.favouriteCoins.length) return null;
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className={styles.header__bookmark__color}
      >
        &#9733;
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={slotProps}
      >
        {bookmarkStore.favouriteCoins.map((id) => (
          <Link key={id} to={`/coins/${id}`}>
            <MenuItem key={id} onClick={handleClose}>
              {id.toUpperCase()}
              <Bookmark id={id} className={styles.header__bookmark} />
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
});
