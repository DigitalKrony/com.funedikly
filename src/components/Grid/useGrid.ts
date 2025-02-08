/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { GridProps, GridState } from './Grid.types';

/**
 * Create the state required to render  Grid.
 *
 * The returned state can be modified with hooks such as use GridStyles,
 * before being passed to render Grid.
 *
 * @param props - props from this instance of  Grid
 * @param ref - reference to root HTMLElement of  Grid
 */
export const useGrid = (props: GridProps, ref: React.Ref<HTMLElement>): GridState => {
  const as = props.as || 'div';

  const state: GridState = {
    ...props,
    components: { root: 'div' },
    root: getNativeElementProps(as, {
      ref,
      ...props,
      as,
    }),
  };

  return state;
};
