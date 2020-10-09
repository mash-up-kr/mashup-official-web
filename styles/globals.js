import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
  body {
    background-color: #121212;
  }
`;

export default GlobalStyle;
