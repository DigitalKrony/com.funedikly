/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

import type { ShellContextValue } from './context/ShellContext.types';

/**
 * ShellSlots
 */
export type ShellSlots = {
  root: Slot<'div'>;

};

/**
 *  ShellProps
 */
export type ShellProps = ComponentProps<ShellSlots>;

/**
 * State used in rendering Shell
 */
export type ShellState = ComponentState<ShellSlots> & ShellProps & ShellContextValue & {
  coProgId: number;
};
