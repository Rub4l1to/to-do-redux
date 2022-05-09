import { css } from '@emotion/react';

//* Assets
import { Raleway } from 'assets/fonts';

export const FontsFaces = css`
  @font-face {
    font-family: 'Raleway-Light';
    src: url(${Raleway.Light}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway-Regular';
    src: url(${Raleway.Regular}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway-Medium';
    src: url(${Raleway.Medium}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway-SemiBold';
    src: url(${Raleway.SemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway-Bold';
    src: url(${Raleway.Bold}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway-Extrabold';
    src: url(${Raleway.ExtraBold}) format('truetype');
  }
`;
