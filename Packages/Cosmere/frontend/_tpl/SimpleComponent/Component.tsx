/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

import { use%name.pascal% } from './use%name.pascal%';
import { render%name.pascal% } from './render%name.pascal%';
import { use%name.pascal%Styles } from './use%name.pascal%Styles';
import type { %name.pascal%Props } from './%name.pascal%.types';

export const %name.pascal%: ForwardRefComponent<%name.pascal%Props> = React.forwardRef((props, ref) => {
  const state = use%name.pascal%(props, ref);
  use%name.pascal%Styles(state);
  return render%name.pascal%(state);
});
