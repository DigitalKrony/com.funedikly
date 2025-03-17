/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles, mergeClasses } from '@griffel/react';
import type { SlotClassNames } from '@fluentui/react-utilities';

import { tokens } from '../utilities';
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
    minWidth: '80%',
    position: 'relative',
    ':before': {
      height: `calc(100% - 72px)`,
      width: '2px',
      position: 'absolute',
      transform: 'translate(-50%, 0px)',
      left: 'calc(100% / 4 - var(--column-gap))',
      content: '""',
      backgroundColor: 'rgba(68, 68, 68, 1)',
    }
  },
  entryDot: {
    position: 'relative',
    marginBlockEnd: tokens.spacing_vert_xl,
    ':before': {
      width: '16px',
      height: '16px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      content: '""',
      borderRadius: '100%',
      backgroundColor: 'rgba(68, 68, 68, 1)',
    }
  },
  entryDotRight: {
    ':before': {
      left: '100%',
      transform: 'translate(-50%, -50%)',
    }
  },
  itemThreeQuarter: {
    width: '75%',
    paddingInlineStart: '25%'
  },
  skillsStyles: {
    display: 'inline-block',
    paddingInlineStart: '24px',
    color: 'rgb(19, 193, 223)'
  },
  tagStyles: {
    display: 'inline-block',
    paddingInlineStart: '24px',
    color: 'rgb(255, 0, 92)',
  },
  entries: {
    paddingInlineStart: '24px',
    minWidth: '80%',
  },
  companyStyles: {
    color: `rgb(242, 0, 255)`
  },
  projectStyles: {
    color: `rgb(242, 0, 255)`
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
