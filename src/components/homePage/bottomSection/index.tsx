import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import classNames from "classnames";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import ReactParallaxTilt from "react-parallax-tilt";
import { setTheme } from "../../../helpers/theme";
import { tableColumns } from "../../../helpers/tables";
import { minute, numberWithCommas } from "../../../helpers/coins";
import styles from "./BottomSection.module.scss";
import { useStore } from "../../../store";
import { useDebounce } from "../../../hooks/useDebounce";
import { Bookmark } from "../../bookmark";

export const BottomSection = observer(() => {
  const { coinsStore, currencyStore } = useStore();
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search);
  const navigate = useNavigate();
  const columns = useMemo(() => tableColumns(), []);

  const initCoins = async () => {
    await coinsStore.initCoins();
  };

  useEffect(() => {
    coinsStore.filterCoinsTable(debouncedValue);
    if (debouncedValue === search) {
      coinsStore.isLoading = false;
    }
  }, [debouncedValue]);

  useEffect(() => {
    (async () => {
      await initCoins();
    })();
    const interval = setInterval(initCoins, minute);
    return () => clearInterval(interval);
  }, [currencyStore.selectedCurrency.label]);

  const onInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    coinsStore.isLoading = true;
    setSearch(e.target.value);
  };

  return (
    <ThemeProvider theme={setTheme("dark")}>
      <Container className={styles.bottom_section__container}>
        <Typography margin={2.5} variant="h4">
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          className={styles.bottom_section__subtitle}
          label="Search For a Crypto Currency..."
          variant="outlined"
          onChange={onInput}
        />
        <TableContainer component={Paper}>
          <LinearProgress
            className={classNames(styles.bottom_section__progress_bar, {
              [styles.bottom_section__progress_bar__visible]:
                coinsStore.isLoading,
            })}
          />
          <Table
            className={styles.bottom_section__title}
            aria-label="simple table"
          >
            <TableHead className={styles.bottom_section__table_header}>
              <TableRow>
                {columns.map((head) => (
                  <TableCell
                    key={head}
                    align={head === "Coin" ? undefined : "right"}
                    sx={{ fontSize: "17px", fontWeight: "bold" }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {coinsStore.filteredCoinsList.map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    className={styles.bottom_section__row}
                    onClick={() => navigate(`/coins/${row.id}`)}
                    key={row.id}
                  >
                    <TableCell
                      className={styles.bottom_section__cell__inner}
                      component="th"
                      scope="row"
                    >
                      <Bookmark
                        id={row.id}
                        className={styles.bottom_section__bookmark}
                      />
                      <ReactParallaxTilt
                        className={styles.bottom_section__fit_content}
                        scale={1.1}
                        tiltReverse
                      >
                        <img
                          className={styles.bottom_section__cell__image}
                          src={row.image}
                          alt={row.name}
                          height="50"
                        />
                      </ReactParallaxTilt>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className={styles.bottom_section__coin_symbol}>
                          {row.symbol}
                        </span>
                        <span className={styles.bottom_section__coin_name}>
                          {row.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {currencyStore.selectedCurrency.symbol}{" "}
                      {numberWithCommas(row.current_price.toFixed(2))}
                    </TableCell>
                    <TableCell
                      className={classNames(
                        styles.bottom_section__coin_percent,
                        {
                          [styles.bottom_section__coin_percent__negative]:
                            false,
                        },
                      )}
                      align="right"
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {currencyStore.selectedCurrency.symbol}{" "}
                      {numberWithCommas(row.market_cap.toString().slice(0, -6))}
                      M
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
});
