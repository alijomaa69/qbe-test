import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from './app/theme/theme';
import { MainLayout } from './components/Layout';

function App() {
  const theme = createTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout/>
    </ThemeProvider>
  );
}

export default App;
