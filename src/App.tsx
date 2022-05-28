import { Global, ThemeProvider } from '@emotion/react';
import colors from 'styles/colors';
import globalStyle from 'styles/global';
import typography from 'styles/typography';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={{ colors, typography }}>
        <div></div>
      </ThemeProvider>
    </>
  );
}

export default App;
