/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles } from '@griffel/react';

import { tokens } from '../../utilities';

/**
 * Styles for the Skills slots
 */
export const useSkillsStyles = makeStyles({
  root: {
    width: '75%',
    padding: `4px 12px`,
    margin: `12px 0`,
    display: 'block',
    fontWeight: tokens.font_weight_lg,
    lineHeight: '2',
    borderBottom: `1px solid ${'white'}`,
  },
});
