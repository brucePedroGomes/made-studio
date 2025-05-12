import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  body {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
    color: #030C30;
  }
`;
