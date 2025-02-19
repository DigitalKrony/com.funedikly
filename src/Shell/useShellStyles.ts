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
export const shellStyles = makeStyles({
  root: {
    minHeight: '100vh',
    maxWidth: '100vw',
    padding: '0 7.5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(220, 220, 220, 1)',
    backgroundColor: 'rgba(20, 20, 20, 1)',
  },
  contentWrapper: {
    width: '80%',
    minHeight: '80vh',
    ':before': {
      position: 'absolute',
      content: '""',
    }
  },
  skillsStyles: {
    color: 'rgb(19, 193, 223)'
  },
  tagStyles: {
    color: 'rgb(255, 0, 92)',
  }
});

/**
 * Apply styling to the  Shell slots based on the state
 */
export const useShellStyles = (state: ShellState): ShellState => {
  const styles = shellStyles();

  state.root.className = mergeClasses(
    shellClassNames.root,
    styles.root,
  );

  return state;
};
