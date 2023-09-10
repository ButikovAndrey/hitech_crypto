import { createTheme, PaletteMode, Theme } from "@mui/material";

// keep object identification name as a low case of label name like "hitech: {label: 'HITECH', symbol: '+'}"
export const currency: Record<string, { label: string; symbol: string }> = {
  usd: { label: "USD", symbol: "$" },
  eur: { label: "EUR", symbol: "€" },
  gbp: { label: "GBP", symbol: "£" },
};

export const setTheme = (mode: PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
    },
  });
};
