/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

/**
 * ShellSlots
 */
export type ShellSlots = {
  root: Slot<'div'>;
};

/**
 *  ShellProps
 */
export type ShellProps = ComponentProps<ShellSlots> & {};

/**
 * State used in rendering Shell
 */
export type ShellState = ComponentState<ShellSlots> & {};

export type ShellContextValue = {};

export type ShellContextValues = {
  shell: ShellContextValue;
};