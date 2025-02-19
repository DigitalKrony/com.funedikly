/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles } from '@griffel/react';

import { tokens } from './../../utilities';

/**
 * Styles for the Projects slots
 */
export const useProjectsStyles = makeStyles({
  root: {
    width: '100%',
    padding: `0 0`,
    margin: `12px 0`,
    display: 'block',
    textAlign: 'center',
    fontWeight: tokens.font_weight_lg,
    lineHeight: '2',
    borderBottom: `1px solid ${'white'}`,
  },
});
