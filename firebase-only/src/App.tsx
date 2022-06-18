import { Global, ThemeProvider } from '@emotion/react';
import RoutesPage from 'pages/routes';
import { BrowserRouter } from 'react-router-dom';
import { colors, effects, typography } from 'styles';
import globalStyle from 'styles/global';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <BrowserRouter>
        <ThemeProvider theme={{ colors, typography, effects }}>
          <RoutesPage />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
