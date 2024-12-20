import { createContext, useContextSelector } from '@fluentui/react-context-selector';
import type { Context, ContextSelector } from '@fluentui/react-context-selector';

import type { ShellContextValue } from "./ShellContext.types";

const setDefaultShellContextValues: ShellContextValue = {
  loaded: false,
};

export const ShellContext: Context<ShellContextValue> = createContext<ShellContextValue | undefined>(undefined) as Context<ShellContextValue>;

export const ShellProvider = ShellContext.Provider;

export const useShellContext = <T>(selector: ContextSelector<ShellContextValue, T>): T =>
  useContextSelector(ShellContext, (ctx = setDefaultShellContextValues) => selector(ctx));
