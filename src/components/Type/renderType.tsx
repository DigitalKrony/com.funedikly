/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { TypeSlots, TypeState } from './Type.types';

/**
 * Render the final JSX of Type
 */
export const renderType: React.FC<TypeState> = (props: TypeState) => {
  const { slots, slotProps } = getSlots<TypeSlots>(props);
  const { type, level } = props;

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
