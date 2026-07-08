/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import type { JSX }  from 'react';
import { assertSlots } from '@fluentui/react-utilities';

import type { %name.pascal%ContextValues, %name.pascal%Slots, %name.pascal%State } from './%name.pascal%.types';
import { %name.pascal%Context } from './%name.pascal%Context';

/**
 * Render the final JSX of  %name.pascal%
 */
export const render%name.pascal% = (state: %name.pascal%State, contextValues: %name.pascal%ContextValues): JSX.Element => {
  assertSlots<%name.pascal%Slots>(state);

  return (
    <%name.pascal%Context.Provider value={contextValues.%name.camel%}>
      <state.root>{state.root.children}</state.root>
    </%name.pascal%Context.Provider>
  );
};
