import { createGlobalStyle } from 'styled-components';
import { themeColors } from './theme';

export default createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
    color: ${themeColors.textPrimary};
  }
`;
