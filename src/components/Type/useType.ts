/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';
import type { TypeProps, TypeState } from './Type.types';

/**
 * Create the state required to render  Type.
 *
 * The returned state can be modified with hooks such as use TypeStyles,
 * before being passed to render Type.
 *
 * @param props - props from this instance of Type
 * @param ref - reference to root HTMLElement of Type
 */
export const useType = (props:  TypeProps, ref: React.Ref<HTMLElement>): TypeState => {
  const { className, type = 'body', level = 'md' } = props;
  let as = props.as ?? 'span';

  switch (type) {
    case 'hero':
      switch(level) {
        case 'sm':
          as ='h3';
          break;
        case 'md':
          as ='h2';
          break;
        case 'lg':
        default:
          as ='h1';
          break;
      }
      break;
    case 'heading':
      switch(level) {
        case 'sm':
          as ='h3';
          break;
        case 'md':
          as ='h2';
          break;
        case 'lg':
        default:
          as ='h1';
          break;
      }
      break;
    case 'subheading':
      switch(level) {
        case 'sm':
          as ='h4';
          break;
        case 'md':
          as ='h3';
          break;
        case 'lg':
        default:
          as ='h2';
          break;
      }
      break;
    case 'body':
      as ='p';
      break;
    case 'caption':
    default:
      as = 'span';
      break;
  }

  const root: TypeState['root'] = slot.always(
    getIntrinsicElementProps(as, {
      ...props,
      ref,
    }),
    { elementType: as }
  );

  const state: TypeState = {
    components: { root: as },
    root,
    className,
    type, 
    level,
  };

  return state;
};
