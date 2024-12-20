import * as React from 'react';

import type { CompaniesProps } from './Companies.types';
import { useCompaniesStyles } from './Companies.styles';

/**
 * Render the final JSX of Companies
 */
export const Companies: React.FC<CompaniesProps> = (props: CompaniesProps) => {
  const { children } = props;
  const styles = useCompaniesStyles();

  return <div className={styles.root}>{children}</div>;
};
