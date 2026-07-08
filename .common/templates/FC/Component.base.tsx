/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { JSX } from 'react';

import type { %name.pascal%Props } from './%name.pascal%.types';
import { use%name.pascal%Styles } from './%name.pascal%.styles';

/**
 * Render the final JSX of %name.pascal%
 */
export const %name.pascal%: React.FC<%name.pascal%Props> = (props: %name.pascal%Props): JSX.Element => {
  const { children } = props;
  const styles = use%name.pascal%Styles();

  return <div className={styles.root}>{children || 'COMPONENT "%name.pascal%" READY TO BUILD'}</div>;
};
