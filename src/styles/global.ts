import { css } from '@emotion/react';
import colors from './colors';

const globalStyle = css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${colors.background};
  }
`;

export default globalStyle;
