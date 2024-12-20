import * as React from 'react';
import { use%name.pascal% } from './use%name.pascal%';
import { render%name.pascal% } from './render%name.pascal%';
import { use%name.pascal%Styles } from './use%name.pascal%Styles';
import type { %name.pascal%Props } from './%name.pascal%.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { use%name.pascal%ContextValues } from './use%name.pascal%ContextValues';

export const %name.pascal%: ForwardRefComponent<%name.pascal%Props> = React.forwardRef((props, ref) => {
  const state = use%name.pascal%(props, ref);
  const contextValues = use%name.pascal%ContextValues(state);
  use%name.pascal%Styles(state);
  return render%name.pascal%(state, contextValues);
});

%name.pascal%.displayName = ' %name.pascal%';
