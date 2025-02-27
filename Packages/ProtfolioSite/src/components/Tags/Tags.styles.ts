/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles } from '@griffel/react';

import { tokens } from './../../utilities';

/**
 * Styles for the Tags slots
 */
export const useTagsStyles = makeStyles({
  root: {
    minWidth: '200px',
    padding: `4px 12px`,
    margin: `12px 0`,
    display: 'inline-block',
    fontWeight: tokens.font_weight_lg,
    lineHeight: '2',
    borderBottom: `1px solid ${'white'}`, // ${tokens.}
  },
});
