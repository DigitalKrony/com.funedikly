/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';

import type { TypographyProps } from './Typography.types';
import { useTypographyStyles } from './Typography.styles';

/**
 * Render the final JSX of Typography
 */
export const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
  const { children } = props;
  const styles = useTypographyStyles();

  return <div className={styles.root}>{children}</div>;
};
