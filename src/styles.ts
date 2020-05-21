import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  // *, *::after, *::before {
  //   box-sizing: border-box;
  //   margin: 0;
  //   padding: 0;
  // }

  body {
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  `;
