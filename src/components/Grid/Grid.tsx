/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { useGrid } from './useGrid';
import { renderGrid } from './renderGrid';
import { useGridStyles } from './useGridStyles';
import type { GridProps } from './Grid.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { useGridContextValues } from './useGridContextValues';

/**
 * Typography and styling abstraction component used to ensure consistency of text.
 */
export const Grid: ForwardRefComponent<GridProps> = React.forwardRef((props: GridProps, ref) => {
  const state = useGrid(props, ref);
  const contextValues = useGridContextValues(state);
  useGridStyles(state);
  return renderGrid(state, contextValues);
});

Grid.displayName = ' Grid';
