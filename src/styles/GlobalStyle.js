import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}

  button{
    cursor: pointer;
  }
  
  a {
    color: black;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
