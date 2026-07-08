/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import type { JSX } from 'react';
import { assertSlots } from '@fluentui/react-utilities';
import type { %name.pascal%Slots, %name.pascal%State } from './%name.pascal%.types';

/**
 * Render the final JSX of %name.pascal%
 */
export const render%name.pascal% = (state: %name.pascal%State): JSX.Element => {
    assertSlots<%name.pascal%Slots>(state);

  return <state.root>{state.root.children}</state.root>;
};
