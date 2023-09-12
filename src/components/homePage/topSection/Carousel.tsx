import React from "react";
import { observer } from "mobx-react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import classNames from "classnames";
import ReactParallaxTilt from "react-parallax-tilt";
import styles from "./TopSection.module.scss";
import { useStore } from "../../../store";
import {
  CoinsListItemType,
  numberWithCommas,
  responsiveParams,
} from "../../../helpers/coins";

export const Carousel = observer(() => {
  const { currencyStore, coinsStore } = useStore();

  const carouselItems = coinsStore.coinsList.map(
    (coinData: CoinsListItemType) => {
      const positiveDailyPrice = coinData.price_change_percentage_24h >= 0;

      return (
        <Link
          key={coinData.id}
          className={styles.top_section__carousel_item}
          to={`/coins/${coinData.id}`}
        >
          <ReactParallaxTilt scale={1.1} tiltReverse>
            <img
              className={styles.top_section__carousel_item__image}
              src={coinData.image}
              alt={coinData.name}
              height="80"
            />
          </ReactParallaxTilt>
          <span>
            {coinData.symbol}
            &nbsp;
            <span
              className={classNames(
                styles.top_section__carousel_item__percent,
                {
                  [styles.top_section__carousel_item__percent_negative]:
                    !positiveDailyPrice,
                },
              )}
            >
              {positiveDailyPrice && "+"}
              {coinData.price_change_percentage_24h.toFixed(2) || 0}%
            </span>
          </span>
          <span className={styles.top_section__carousel_item__price}>
            {currencyStore.selectedCurrency.symbol}
            {numberWithCommas(coinData.current_price.toFixed(2))}
          </span>
        </Link>
      );
    },
  );

  return (
    <div className={styles.top_section__carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsiveParams}
        items={carouselItems}
        autoPlay
      />
    </div>
  );
});
