import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { TopSection } from "../../components/homePage/topSection";
import { BottomSection } from "../../components/homePage/bottomSection";
import { minute } from "../../helpers/coins";
import { useStore } from "../../store";

export const HomePage = observer(() => {
  const { coinsStore, currencyStore } = useStore();

  useEffect(() => {
    (async () => {
      await coinsStore.initCoins();
    })();
    const interval = setInterval(() => coinsStore.initCoins(), minute);
    return () => clearInterval(interval);
  }, [currencyStore.selectedCurrency.label]);

  return (
    <>
      <TopSection />
      <BottomSection />
    </>
  );
});
