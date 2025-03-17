/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

/**
 * TypeSlots
 */
export type TypeSlots = {
  root: Slot<'h1'> | Slot<'h2'> | Slot<'h3'> | Slot<'h4'> | Slot<'h5'> | Slot<'h6'> | Slot<'p'> | Slot<'strong'> | Slot<'em'> | Slot<'mark'> | Slot<'cite'> | Slot<'dfn'> | Slot<'code'> | Slot<'div'> | Slot<'span'>; 
};

/**
 *  TypeProps
 */
export type TypeProps = ComponentProps<TypeSlots> & {
  type?: 'hero' | 'heading' | 'subheading' | 'body' | 'caption';
  level?: 'sm' | 'md' | 'lg' 
};

/**
 * TypeState
 */
export type TypeState = ComponentState<TypeSlots> & TypeProps & {};
