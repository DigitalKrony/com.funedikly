import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';

import type { %name.pascal%ContextValues, %name.pascal%Slots, %name.pascal%State } from './%name.pascal%.types';
import { %name.pascal%Context } from './%name.pascal%Context';

/**
 * Render the final JSX of  %name.pascal%
 */
export const render%name.pascal% = (state: %name.pascal%State, contextValues: %name.pascal%ContextValues) => {
  const { slots, slotProps } = getSlots<%name.pascal%Slots>(state);

  return (
    <%name.pascal%Context.Provider value={contextValues.%name.camel%}>
      <slots.root {...slotProps.root}>{slotProps.root.children}</slots.root>
    </%name.pascal%Context.Provider>
  );
};
