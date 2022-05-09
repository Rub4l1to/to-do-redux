import { css } from '@emotion/react';
import { FontsFaces } from './fonts';

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }

  .scroll-none {
    overflow: hidden;
  }

  input,
  textarea {
    -webkit-user-select: text;
    -khtml-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    outline: 0;
  }

  p {
    &::first-letter {
      text-transform: capitalize;
    }
  }

  ${FontsFaces};
`;
