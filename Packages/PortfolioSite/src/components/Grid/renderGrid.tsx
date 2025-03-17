/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { GridContextValues, GridSlots, GridState } from './Grid.types';
import { GridContext } from './GridContext';

/**
 * Render the final JSX of  Grid
 */
export const renderGrid = (state: GridState, contextValues: GridContextValues) => {
  const { container } = state;
  const { slots, slotProps } = getSlots<GridSlots>(state);

  if (!container) {
    return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
  }

  return (
    <GridContext.Provider value={contextValues.grid}>
      <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>
    </GridContext.Provider>
  );
};
