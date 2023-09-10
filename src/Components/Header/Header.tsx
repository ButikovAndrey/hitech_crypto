import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { currency, setTheme } from "../helpers";

export const Header = () => {
  return (
    <ThemeProvider theme={setTheme("dark")}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar className={styles.header__toolbar}>
            <Link to="/">
              <Typography variant="h5" className={styles.header__typography}>
                Crypto Search
              </Typography>
            </Link>
            <Select
              className={styles.header__select}
              variant="outlined"
              defaultValue={currency.usd.label}
            >
              {Object.keys(currency).map((symbol) => {
                const { label } = currency[symbol];
                return <MenuItem value={label}>{label}</MenuItem>;
              })}
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
