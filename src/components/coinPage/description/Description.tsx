import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { Container, Typography } from "@mui/material";
import styles from "./Description.module.scss";
import { numberWithCommas } from "../../../helpers/coins";
import { useStore } from "../../../store";
import { Bookmark } from "../../bookmark";

export const Description = () => {
  const { coinsStore, currencyStore } = useStore();

  if (!coinsStore.coinInfo.id) {
    return null;
  }
  return (
    <Container className={styles.coin_page__sidebar}>
      <ReactParallaxTilt
        className={styles.coin_page__fit_content}
        scale={1.05}
        tiltReverse
      >
        <img
          className={styles.coin_page__image}
          src={coinsStore.coinInfo.image.large}
          alt={coinsStore.coinInfo.name}
        />
      </ReactParallaxTilt>
      <Typography variant="h3" className={styles.coin_page__heading}>
        {coinsStore.coinInfo.name}
        <Bookmark
          id={coinsStore.coinInfo.id}
          className={styles.coin_page__bookmark}
        />
      </Typography>
      <Typography variant="subtitle1" className={styles.coin_page__description}>
        {coinsStore.coinInfo.description.en.split(". ")[0]}
      </Typography>
      <Container className={styles.coin_page__market_data}>
        <span className={styles.coin_page__market_data__inner}>
          <Typography variant="h5" className={styles.coin_page__heading}>
            Rank:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5">
            {numberWithCommas(coinsStore.coinInfo.market_cap_rank)}
          </Typography>
        </span>

        <span className={styles.coin_page__market_data__inner}>
          <Typography variant="h5" className={styles.coin_page__heading}>
            Current Price:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5">
            {currencyStore.selectedCurrency.symbol}{" "}
            {numberWithCommas(
              coinsStore.coinInfo.market_data.current_price[
                currencyStore.selectedCurrency.label
              ],
            )}
          </Typography>
        </span>
        <span className={styles.coin_page__market_data__inner}>
          <Typography variant="h5" className={styles.coin_page__heading}>
            Market Cap:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant="h5">
            {currencyStore.selectedCurrency.symbol}{" "}
            {numberWithCommas(
              coinsStore.coinInfo.market_data.market_cap[
                currencyStore.selectedCurrency.label
              ]
                .toString()
                .slice(0, -6),
            )}
            M
          </Typography>
        </span>
      </Container>
    </Container>
  );
};
