import { createTheme as createThemeMui, PaletteMode } from '@mui/material';
import { breakpoints } from './breakpoints';
import { dark, light } from './colors';
import { fonts } from './fonts';
import { spacing } from './spacing';
import { zIndex } from './z-index';

export const createTheme = (mode: PaletteMode) => {
  const theme = createThemeMui({
    palette: mode === 'light' ? light : dark,
    typography: fonts,
    spacing,
    breakpoints,
    zIndex,
  });

  return theme;
};
