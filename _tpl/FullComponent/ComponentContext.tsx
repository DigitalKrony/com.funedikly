/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import type { %name.pascal%ContextValue } from './%name.pascal%.types';

export const %name.pascal%Context = React.createContext<%name.pascal%ContextValue>({});

export const use%name.pascal%Context = () => React.useContext(%name.pascal%Context);
