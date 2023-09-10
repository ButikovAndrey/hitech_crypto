import { createTheme, PaletteMode, Theme } from "@mui/material";

export const setTheme = (mode: PaletteMode): Theme => {
  return createTheme({
    palette: {
      mode,
    },
  });
};
