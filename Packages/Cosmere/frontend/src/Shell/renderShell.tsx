/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';

import type { ShellContextValues, ShellSlots, ShellState } from './Shell.types';
import { ShellContext } from './context/ShellContext';

/**
 * Render the final JSX of  Shell
 */
export const renderShell = (state: ShellState, contextValues: ShellContextValues) => {
  const { slots, slotProps } = getSlots<ShellSlots>(state);

  return (
    <ShellContext.Provider value={contextValues.shell}>
      <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>
    </ShellContext.Provider>
  );
};
