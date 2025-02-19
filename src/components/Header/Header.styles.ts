/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles } from '@griffel/react';
import { tokens } from './../../utilities';

/**
 * Styles for the Header slots
 */
export const useHeaderStyles = makeStyles({
  root: {
    maxWidth: '75vw',
    margin: '0 0 24px',
  },
  pageTitle: {
    // transform: `rotate(90deg) translate(-150px, 40px)`,
    // transition: `150ms ease-in-out transform`,
    // '@media(min-width: 430px)': {
    //   transform: `rotate(90deg) translate(-80px, 50px)`,
    // },
    // '@media(min-width: 768px)': {
    //   transform: `rotate(0deg)`,
    // }
  },
  titleBy: {
    width: '100%',
    display: 'block',
    // textAlign: 'end',
  },
});
