/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import {forwardRef} from 'react';
import { useShell } from './useShell';
import { renderShell } from './renderShell';
import { useShellStyles } from './useShellStyles';
import { type ShellProps } from './Shell.types';
import { type ForwardRefComponent } from '@fluentui/react-utilities';
import { useShellContextValues } from './context/useShellContextValues';

export const Shell: ForwardRefComponent<ShellProps> = forwardRef((props: ShellProps, ref: any) => {
  const state = useShell(props, ref);
  const contextValues = useShellContextValues(state);
  useShellStyles(state);
  return renderShell(state, contextValues);
});

Shell.displayName = 'Shell';
