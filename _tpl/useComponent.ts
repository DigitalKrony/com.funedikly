import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';
import type { %name.pascal%Props, %name.pascal%State } from './%name.pascal%.types';

/**
 * Create the state required to render  %name.pascal%.
 *
 * The returned state can be modified with hooks such as use %name.pascal%Styles,
 * before being passed to render %name.pascal%.
 *
 * @param props - props from this instance of %name.pascal%
 * @param ref - reference to root HTMLElement of %name.pascal%
 */
export const use%name.pascal% = (props:  %name.pascal%Props, ref: React.Ref<HTMLElement> & React.Ref<HTMLDivElement>): %name.pascal%State => {
  const root: %name.pascal%State['root'] = slot.always(
    getIntrinsicElementProps('div', {
      ...props,
      ref,
    }),
    { elementType: 'div' }
  );

  const state: %name.pascal%State = {
    components: { root: 'div' },
    root,
  };

  return state;
};
