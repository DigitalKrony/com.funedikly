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
    fontSize: tokens.hero_size_l,
  },
  titleBy: {
    textAlign: 'end',
  },
});
