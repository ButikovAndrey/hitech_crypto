import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import styles from "./Header.module.scss";
import { CURRENCY_LABELS } from "../../helpers/currency";
import { setTheme } from "../../helpers/theme";
import { useStore } from "../../store";

export const Header = observer(() => {
  const { currencyStore } = useStore();
  const onCurrencyChange = ({ target }: SelectChangeEvent<CURRENCY_LABELS>) => {
    currencyStore.setCurrency(target.value as CURRENCY_LABELS);
  };

  return (
    <ThemeProvider theme={setTheme("dark")}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar className={styles.header__toolbar}>
            <Link to="/">
              <Typography variant="h5" className={styles.header__typography}>
                Hitech Crypto
              </Typography>
            </Link>
            <Select
              className={styles.header__select}
              variant="outlined"
              defaultValue={currencyStore.selectedCurrency.label}
              onChange={onCurrencyChange}
            >
              {Object.keys(currencyStore.currencyList).map((symbol) => {
                const { label } = currencyStore.currencyList[symbol];
                return <MenuItem value={label}>{label.toUpperCase()}</MenuItem>;
              })}
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
});
