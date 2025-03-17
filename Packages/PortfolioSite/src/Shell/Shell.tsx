/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";
import type { ForwardRefComponent } from "@fluentui/react-utilities";

import { useShell } from "./useShell";
import { renderShell } from "./renderShell";
import { useShellStyles } from "./useShellStyles";
import type { ShellProps } from "./Shell.types";
import { useShellContextValues } from "./context/useShellContextValues";

export const Shell: ForwardRefComponent<ShellProps> = React.forwardRef((props, ref) => {
  const state = useShell(props, ref);
  const contextValues = useShellContextValues(state);
  useShellStyles(state);
  return renderShell(state, contextValues);
});

Shell.displayName = "Shell";
