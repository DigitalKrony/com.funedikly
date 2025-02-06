/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@fluentui/react-utilities';

import type { ShellSlots, ShellState } from './Shell.types';

export const shellClassNames: SlotClassNames<ShellSlots> = {
  root: 'fn-shell',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    maxWidth: '100vw',
    padding: '0 12.5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(220, 220, 220, 1)',
    backgroundColor: 'rgba(20, 20, 20, 1)',
  },
});

/**
 * Apply styling to the  Shell slots based on the state
 */
export const useShellStyles = (state: ShellState): ShellState => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    shellClassNames.root,
    styles.root,
  );

  return state;
};
