import { Global, ThemeProvider } from '@emotion/react';
import colors from 'styles/colors';
import globalStyle from 'styles/global';
import { colors, typography, effects } from 'styles';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={{ colors, typography, effects }}>
        <div></div>
      </ThemeProvider>
    </>
  );
}

export default App;
