/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';

import { siteData } from './../assets/data';

import { useShellContext } from './context/ShellContext';
import type { ShellProps, ShellState } from './Shell.types';

/**
 * Create the state required to render  Shell.
 *
 * The returned state can be modified with hooks such as use ShellStyles,
 * before being passed to render Shell.
 *
 * @param props - props from this instance of Shell
 * @param ref - reference to root HTMLElement of Shell
 */
export const useShell = (props: ShellProps, ref: React.Ref<HTMLElement> & React.Ref<HTMLDivElement>): ShellState => {
  const { projects } = siteData;
  const loaded = useShellContext((ctx) => ctx.loaded);
  const [useCoProj, setCoProj] = React.useState(0);

  React.useEffect(() => {
    const andChange = setInterval(() => {
      if (useCoProj === projects.length - 1) {
        setCoProj(0);
      } else {
        setCoProj(useCoProj+1);
      }

    }, 2500);

    return () => clearInterval(andChange || undefined) ;
  }, [useCoProj, setCoProj, projects]);

  const root: ShellState['root'] = slot.always(
    getIntrinsicElementProps('div', {
      ...props,
      ref,
    }),
    { elementType: 'div' }
  );

  const state: ShellState = {
    components: { root: 'div' },
    root,
    loaded,
    coProgId: useCoProj
  };

  return state;
};
