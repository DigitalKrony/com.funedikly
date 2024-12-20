import { makeStyles, mergeClasses } from '@griffel/react';
import { SlotClassNames } from '@fluentui/react-utilities';

import type { %name.pascal%Slots, %name.pascal%State } from './%name.pascal%.types';

export const %name.pascal%ClassNames: SlotClassNames<%name.pascal%Slots> = {
  root: 'bap-%name.camel%',
};

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {},
});

/**
 * Apply styling to the %name.pascal% slots based on the props
 */
export const use%name.pascal%Styles = (props: %name.pascal%State): %name.pascal%State => {
  const styles = useStyles();

  props.root.className = mergeClasses(%name.pascal%ClassNames.root, styles.root);

  return props;
};
