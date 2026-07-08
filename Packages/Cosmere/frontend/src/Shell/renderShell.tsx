/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */

import { assertSlots } from '@fluentui/react-utilities';
import { useErrorBoundary } from 'use-error-boundary';

import { Stage, Sun, Planet, DevGUI } from './../Components';

import { type ShellContextValues, type ShellSlots, type ShellState } from './Shell.types';
import { ShellContext } from './context/ShellContext';

/**
 * Render the final JSX of  Shell
 */
export const renderShell = (state: ShellState, contextValues: ShellContextValues) => {
  const { isDev } = state;

  assertSlots<ShellSlots>(state);

  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  if (didCatch) {
    return <>{error.message}</>;
  }

  return (
    <ShellContext.Provider value={contextValues.shell}>
      <ErrorBoundary>
        <state.root>
          <Stage>
            <Sun />
            <Planet size={8} position={[10, -20, 20]} />
          </Stage>

          {isDev && <DevGUI />}
        </state.root>
      </ErrorBoundary>
    </ShellContext.Provider>
  );
};
