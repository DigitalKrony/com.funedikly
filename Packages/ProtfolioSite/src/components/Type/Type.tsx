/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

import { useType } from './useType';
import { renderType } from './renderType';
import { useTypeStyles } from './useTypeStyles';
import type { TypeProps } from './Type.types';

export const Type: ForwardRefComponent<TypeProps> = React.forwardRef((props, ref) => {
  const state = useType(props, ref);
  useTypeStyles(state);
  return renderType(state);
});
