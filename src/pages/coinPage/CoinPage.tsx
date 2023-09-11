import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, LinearProgress } from "@mui/material";
import { observer } from "mobx-react";
import styles from "./CoinPage.module.scss";
import { useStore } from "../../store";
import { minute } from "../../helpers/coins";
import { Description } from "./Description";
import { Graph } from "./Graph";

export const CoinPage = observer(() => {
  const { coinsStore, currencyStore } = useStore();
  const { id } = useParams();

  useEffect(() => {
    console.log("useEffect CoinPage");
    let interval: NodeJS.Timer;
    if (id) {
      (async () => {
        await coinsStore.getSingleCoin(id);
      })();
      interval = setInterval(() => coinsStore.getSingleCoin(id), minute);
    }
    return () => clearInterval(interval);
  }, [id, currencyStore.selectedCurrency.label]);

  const responsiveContainer = useMemo(
    () => ({
      flexDirection: { md: "column" },
      alignItems: { md: "center" },
    }),
    [],
  );

  return (
    <Container className={styles.coin_page__container} sx={responsiveContainer}>
      {coinsStore.isLoading ? (
        <LinearProgress className={styles.coin_page__loader} />
      ) : (
        <>
          <Description />
          <Graph />
        </>
      )}
    </Container>
  );
});
