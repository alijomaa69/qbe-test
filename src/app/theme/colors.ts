import { PaletteMode } from '@mui/material';

export const light = {
  mode: 'light' as PaletteMode,
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
  },
  background: {
    default: '#f8fcff',
    paper: '#fff',
  },
  divider: '#fff',
  info: {
    main: '#2196f3',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#fff',
  },
  primary: {
    main: '#1d2848',
    light: '#1d2848',
    dark: '#004e9a',
    contrastText: '#fff',
  },
  secondary: {
    main: '#1b51a4',
    light: '#4873B6',
    dark: '#123872',
    contrastText: '#fff',
  },
  success: {
    contrastText: '#fff',
    main: '#4b970c',
  },
  error: {
    main: '#bf0201',
  },
  text: {
    disabled: 'rgba(0, 0, 0, 0.38)',
    primary: '#757575',
    secondary: '#757575',
  },
};

export const dark = {
  mode: 'dark' as PaletteMode,
  action: {
    activatedOpacity: 0.24,
    active: '#fff',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
  },
  background: {
    default: '#051e38',
    paper: '#0A1929',
  },
  divider: '#3399ff',
  info: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#0288d1',
    light: '#4fc3f7',
    main: '#29b6f6',
  },
  primary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    main: '#0070dd',
    dark: '#001c5c',
    light: '#33539c',
  },
  secondary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#ab47bc',
    light: '#f3e5f5',
    main: '#121212',
  },
  success: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    main: '#1DB45A',
  },
  text: {
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    primary: '#fff',
    secondary: '#aab4be',
  },
};
