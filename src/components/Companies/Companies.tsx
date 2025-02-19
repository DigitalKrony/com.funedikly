/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';

import { useShellContext } from './../../Shell/context/ShellContext';

import type { CompaniesProps } from './Companies.types';
import { useCompaniesStyles } from './Companies.styles';

/**
 * Render the final JSX of Companies
 */
export const Companies: React.FC<CompaniesProps> = (props: CompaniesProps) => {
  const { coProjList } = props;
  const styles = useCompaniesStyles();
  let oId = useShellContext( ctx => ctx.coProgId);

  return <div className={styles.root}>{coProjList[oId].co}</div>;
};
