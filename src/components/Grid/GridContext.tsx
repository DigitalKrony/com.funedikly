/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import type { GridContextValue } from './Grid.types';

export const GridContext = React.createContext<GridContextValue>({});

export const useGridContext = () => React.useContext(GridContext);
