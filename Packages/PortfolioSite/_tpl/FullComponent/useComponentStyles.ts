/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { makeStyles, mergeClasses } from '@griffel/react';
import type { %name.pascal%Slots, %name.pascal%State } from './%name.pascal%.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const %name.camel%ClassNames: SlotClassNames<%name.pascal%Slots> = {
  root: 'fn-%name.snake%',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {}
});

/**
 * Apply styling to the  %name.pascal% slots based on the state
 */
export const use%name.pascal%Styles = (state: %name.pascal%State): %name.pascal%State => {
  const styles = useStyles();

  state.root.className = mergeClasses(
    %name.camel%ClassNames.root,
    styles.root
  );

  return state;
};
