import React, { useMemo } from "react";
import {
  Button,
  CircularProgress,
  Container,
  ThemeProvider,
} from "@mui/material";
import { observer } from "mobx-react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useStore } from "../../../store";
import { setTheme } from "../../../helpers/theme";
import styles from "./Graph.module.scss";
import { chartDays } from "../../../helpers/tables";

Chart.register(...registerables);

export const Graph = observer(() => {
  const { currencyStore, graphStore } = useStore();

  const setTimeLabels = (numericTime: number) => {
    const date = new Date(numericTime);
    const time =
      date.getHours() > 12
        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;
    return graphStore.timePeriod.value === 1 ? time : date.toLocaleDateString();
  };

  const responsiveContainer = useMemo(
    () => ({
      width: { md: "100%" },
      marginTop: { md: "0" },
      padding: { md: "20px" },
      paddingTop: { md: "0" },
    }),
    [],
  );

  const graphData = {
    labels: graphStore.chartPrices.prices.map((coin) => setTimeLabels(coin[0])),
    datasets: [
      {
        data: graphStore.chartPrices.prices.map((coin) => coin[1]),
        label: `Price ( Past ${
          graphStore.timePeriod.label
        } ) in ${currencyStore.selectedCurrency.label.toUpperCase()}`,
      },
    ],
  };

  const graphOptions = {
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <ThemeProvider theme={setTheme("dark")}>
      <Container
        sx={responsiveContainer}
        className={styles.coin_page__graph_container}
      >
        {graphStore.isLoading ? (
          <CircularProgress size={250} thickness={1} />
        ) : (
          <>
            <Line data={graphData} options={graphOptions} />
            <div className={styles.coin_page__btn_container}>
              {chartDays.map((day) => {
                const isSelected = graphStore.timePeriod.value === day.value;
                return (
                  <Button
                    key={day.label}
                    onClick={() => {
                      graphStore.timePeriod = day;
                    }}
                    variant={isSelected ? "contained" : "outlined"}
                    size="large"
                  >
                    {day.label}
                  </Button>
                );
              })}
            </div>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
});
