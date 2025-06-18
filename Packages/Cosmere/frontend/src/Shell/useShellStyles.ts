/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles, mergeClasses } from '@griffel/react';
import type { ShellSlots, ShellState } from './Shell.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const shellClassNames: SlotClassNames<ShellSlots> = {
  root: 'fn-shell',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {}
});

/**
 * Apply styling to the  Shell slots based on the state
 */
export const useShellStyles = (state: ShellState): ShellState => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    shellClassNames.root,
    styles.root
  );

  return state;
};
