/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { ShellContextValue, ShellContextValues } from './ShellContext.types';
import type { ShellState } from './../Shell.types';

export const useShellContextValues =  (state: ShellState): ShellContextValues => {
  // const {  } = state;

  const shell: ShellContextValue = {};

  return { shell };
}
