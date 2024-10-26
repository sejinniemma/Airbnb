import { ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import theme from './utils/theme';

function App() {
  const routing = useRoutes(routes);
  return <ThemeProvider theme={theme}>{routing}</ThemeProvider>;
}

export default App;
