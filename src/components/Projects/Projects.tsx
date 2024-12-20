import * as React from 'react';

import type { ProjectsProps } from './Projects.types';
import { useProjectsStyles } from './Projects.styles';

/**
 * Render the final JSX of Projects
 */
export const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
  const { children } = props;
  const styles = useProjectsStyles();

  return <div className={styles.root}>{children}</div>;
};
