import React from 'react';
import { Global } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          height: 100vh;
          font-size: 1rem;
          font-family: 'Rubik', sans-serif;
          background: #fcfcfc;
        }
      `}
    />
  );
}
