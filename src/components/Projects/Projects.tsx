/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { mergeClasses } from '@griffel/react';

import { Type } from './../';

import { useShellContext } from './../../Shell/context/ShellContext';

import type { ProjectsProps } from './Projects.types';
import { useProjectsStyles } from './Projects.styles';

/**
 * Render the final JSX of Projects
 */
export const Projects: React.FC<ProjectsProps> = (props: ProjectsProps) => {
  const { coProjList } = props;
  const styles = useProjectsStyles();
  let oId = useShellContext( ctx => ctx.coProgId);

  return <Type className={mergeClasses(props.className, styles.root)} as={'h2'} type={'heading'} level={'lg'}>{coProjList[oId].pj}</Type>;
};
