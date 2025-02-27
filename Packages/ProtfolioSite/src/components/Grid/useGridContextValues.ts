/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { GridContextValue, GridContextValues, GridState } from './Grid.types';

export function useGridContextValues(state: GridState): GridContextValues {
  // This context is created with "@fluentui/react-context-selector", these is no sense to memoize it
  const grid: GridContextValue = {};

  return { grid };
}
