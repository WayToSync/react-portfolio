import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  
  }
  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${props => props.theme.colors.white};
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
