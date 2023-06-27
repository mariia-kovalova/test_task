import { css } from '@emotion/react';
import { modernNormalizeCss } from 'emotion-modern-normalize';
import '@fontsource/nunito';

export const GlobalStyles = css`
  ${modernNormalizeCss}

  :root {
    --primary: #f4e041;
    --secondary: #00bdd3;

    --bg-primary: #f8f8f8;
    --bg-secondary: #ffffff;

    --text-color-dark: #000000de;
    --text-color-light: #ffffff;

    --btn-primary-normal: var(--primary);
    --btn-primary-hover: #ffe302;
    --btn-primary-disabled: #b4b4b4;

    --btn-text-color-disabled: #ffffffde;

    --input-text-color-default: #7e7e7e;
    --input-border-color: #d0cfcf;

    --error: #cb3d40;

    --gap: 20px;

    --cubic: cubic-bezier(0.4, 0, 0.2, 1);
  }

  html {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;

    background-color: var(--bg-primary);
    color: var(--text-color-dark);

    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.625;
    letter-spacing: 0em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  h1,
  h2 {
    font-weight: 400;
    font-size: 40px;
    line-height: 1;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    display: block;
  }
`;
