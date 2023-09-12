export const tableColumns = () => {
  return ["Coin", "Price", "24h Change", "Market Cap"];
};

export type DaysType = {
  label: string;
  value: number;
};

export const chartDays: DaysType[] = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];
