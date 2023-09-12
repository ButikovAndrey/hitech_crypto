import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, LinearProgress } from "@mui/material";
import { observer } from "mobx-react";
import styles from "./CoinPage.module.scss";
import { useStore } from "../../store";
import { minute } from "../../helpers/coins";
import { Description } from "../../components/coinPage/description/Description";
import { Graph } from "../../components/coinPage/graph/Graph";

export const CoinPage = observer(() => {
  const { coinsStore, currencyStore, graphStore } = useStore();
  const { id } = useParams();

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (id) {
      (async () => {
        await graphStore.getHistoricalChart(id);
      })();
      interval = setInterval(() => graphStore.getHistoricalChart(id), minute);
    }
    return () => clearInterval(interval);
  }, [id, currencyStore.selectedCurrency.label, graphStore.timePeriod]);

  useEffect(() => {
    if (id) {
      (async () => {
        await coinsStore.getSingleCoin(id);
      })();
    }
  }, [id, currencyStore.selectedCurrency.label]);

  const responsiveContainer = useMemo(
    () => ({
      flexDirection: { md: "column" },
      alignItems: { md: "center" },
    }),
    [],
  );

  return (
    <div className={styles.coin_page__background}>
      <Container
        className={styles.coin_page__container}
        sx={responsiveContainer}
      >
        {coinsStore.isLoading ? (
          <LinearProgress className={styles.coin_page__loader} />
        ) : (
          <>
            <Description />
            <Graph />
          </>
        )}
      </Container>
    </div>
  );
});
