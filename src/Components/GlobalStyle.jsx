import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --ash-bg: #E6E9F2;
    --sidebar-bg: rgb(244,244,246);
    --white : white;
    --black: black;
  }
  html{
    font-size: 16px;
    font-family: 'Times New Roman';
    background-color: var(--ash-bg);
  }
  
`;
export default GlobalStyles;