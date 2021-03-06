import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  html {
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
  }

  body {
    margin: 0;
  }

  #root {
    padding: 20px;
  }

  .MuiSvgIcon-root {
    font-size: 18px !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
