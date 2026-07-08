/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

/**
 * %name.pascal%Slots
 */
export type %name.pascal%Slots = {
  root: NonNullable<Slot<'div'>>;
};

/**
 *  %name.pascal%Props
 */
export type %name.pascal%Props = ComponentProps<%name.pascal%Slots> & {};

/**
 * Context used in rendering %name.pascal%
 */
export type %name.pascal%ContextValue = {};

export type %name.pascal%ContextValues = {
  %name.camel%: %name.pascal%ContextValue;
};

/**
 * State used in rendering %name.pascal%
 */
export type %name.pascal%State = ComponentState<%name.pascal%Slots> & %name.pascal%ContextValue & {};
