/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { %name.pascal%Slots, %name.pascal%State } from './%name.pascal%.types';

/**
 * Render the final JSX of %name.pascal%
 */
export const render%name.pascal%: React.FC<%name.pascal%State> = (props: %name.pascal%State) => {
  const { slots, slotProps } = getSlots<%name.pascal%Slots>(props);

  return <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>;
};
