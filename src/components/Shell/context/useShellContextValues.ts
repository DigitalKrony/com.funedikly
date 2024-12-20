import type { ShellContextValue, ShellContextValues } from './ShellContext.types';
import type { ShellState } from '../Shell.types';

export const useShellContextValues = (state: ShellState): ShellContextValues => {
  const { loaded } = state;

  const shell: ShellContextValue = {
    loaded
  };

  return { shell };
};
