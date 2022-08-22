import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: black;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
