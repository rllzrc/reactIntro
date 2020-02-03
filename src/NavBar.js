// * emotion is a library for including your styles inside of your component files and allowing you to harnees JS to easily script your CSS

import React from 'react';
import { Link } from '@react/router';
import { css } from '@emotion/core';
import colors from './colors';
import { css, keyframes } from 'react-emotion';

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
  `;

const NavBar = () => (
  <header
    css={css`
      background-color: ${colors.dark};
      position: sticky,
      top: 0;
      z-index: 10;
    `}
  >
  <Link
    css={css`
      &:hover {
        text-decoration: underline;
      }
    `}
    to='/'>Adopt Me!</Link>
  <span 
    css={css`
      display: inline-block;
      animation: 1s ${Spin} linear infinite;
      font-size: 60px;
    `}
    aria-label='logo'
    role='img'>
    🐶
  </span>
  </header>
);

// * emotion has other ways of interacting with it (generating components) but here we're using the new css prop way of doing it. 
// * css prop allows us to use the css tagged template literal to write CSS.

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
  `;

