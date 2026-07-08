/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { createContext, useContextSelector } from '@fluentui/react-context-selector';
import type { Context, ContextSelector } from '@fluentui/react-context-selector';

import type { ShellContextValue } from './../Shell.types';

const setDefaultShellContextValues: ShellContextValue = {
  isDev: false,
  windowSize: { width: 0, height: 0 },
  setWindowSize: () => ({ width: 0, height: 0 }),
  canvasRef: undefined,
  renderer: undefined,
  setRenderer: () => undefined,
  canvas: undefined,
  setCanvas: () => undefined,
};

export const ShellContext: Context<ShellContextValue> = createContext<ShellContextValue | undefined>(
  undefined
) as Context<ShellContextValue>;

export const ShellProvider = ShellContext.Provider;

export const useShellContext = <T>(selector: ContextSelector<ShellContextValue, T>): T =>
  useContextSelector(ShellContext, (ctx = setDefaultShellContextValues) => selector(ctx));
