import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    color: black;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
