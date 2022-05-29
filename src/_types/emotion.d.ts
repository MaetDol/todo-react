import '@emotion/react';
import { colorsType } from 'styles/colors';
import { typographyType } from 'styles/typography';

declare module '@emotion/react' {
  interface Theme {
    colors: colorsType;
    typography: typographyType;
  }
}
