/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { createContext, useContextSelector } from '@fluentui/react-context-selector';
import type { Context, ContextSelector } from '@fluentui/react-context-selector';

import type { %name.pascal%ContextValue } from './%name.pascal%Context.types';

const setDefault%name.pascal%ContextValues: %name.pascal%ContextValue = {
};

export const %name.pascal%Context: Context<%name.pascal%ContextValue> = createContext<%name.pascal%ContextValue | undefined>(undefined) as Context<%name.pascal%ContextValue>;

export const %name.pascal%Provider = %name.pascal%Context.Provider;

export const use%name.pascal%Context = <T>(selector: ContextSelector<%name.pascal%ContextValue, T>): T =>
  useContextSelector(%name.pascal%Context, (ctx = setDefault%name.pascal%ContextValues) => selector(ctx));
