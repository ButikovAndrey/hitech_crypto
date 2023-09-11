import React, { useMemo } from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { Container, Typography } from "@mui/material";
import styles from "./CoinPage.module.scss";
import { numberWithCommas } from "../../helpers/coins";
import { useStore } from "../../store";

export const Description = () => {
  const { coinsStore, currencyStore } = useStore();

  const [responsiveSidebar, responsiveMarketData, responsiveDescription] =
    useMemo(
      () => [
        {
          display: { md: "flex" },
          width: { md: "35%" },
          borderRight: { md: "2px solid grey" },
        },
        {
          display: { md: "flex" },
          justifyContent: { md: "space-around" },
          flexDirection: { sm: "column" },
          alignItems: { sm: "center", sx: "start" },
        },
        {
          width: { md: "100%", sm: "50%", xs: "80%" },
        },
      ],
      [],
    );
  if (!coinsStore.coinInfo.name) {
    return null;
  }
  return (
    <Container sx={responsiveSidebar} className={styles.coin_page__sidebar}>
      <ReactParallaxTilt scale={1.05} tiltReverse>
        <img
          src={coinsStore.coinInfo.image.large}
          alt={coinsStore.coinInfo.name}
          className={styles.coin_page__image}
        />
      </ReactParallaxTilt>
      <Typography variant="h3" className={styles.coin_page__heading}>
        {coinsStore.coinInfo.name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={responsiveDescription}
        className={styles.coin_page__description}
      >
        {coinsStore.coinInfo.description.en.split(". ")[0]}
      </Typography>
      <Container
        className={styles.coin_page__market_data}
        sx={responsiveMarketData}
      >
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
