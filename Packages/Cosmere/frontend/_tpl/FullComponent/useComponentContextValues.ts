/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { %name.pascal%ContextValue, %name.pascal%ContextValues } from './%name.pascal%Context.types';
import type { %name.pascal%State } from './../%name.pascal%.types';

export const use%name.pascal%ContextValues = (state: %name.pascal%State): %name.pascal%ContextValues => {
  // const {  } = state;

  const %name.camel%: %name.pascal%ContextValue = {};

  return { %name.camel% };
}
