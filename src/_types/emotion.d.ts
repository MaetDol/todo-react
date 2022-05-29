import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    colors: import('styles/colors').colorsType;
    typography: import('styles/typography').typographyType;
    effects: import('styles/effects').effectsType;
  }
}
