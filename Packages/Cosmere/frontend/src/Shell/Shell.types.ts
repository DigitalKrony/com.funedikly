/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { type Dispatch, type SetStateAction } from 'react';
import { type ComponentProps, type ComponentState, type Slot } from '@fluentui/react-utilities';
import type GUI from 'lil-gui';

export type GUIElement = {
  autoPlace?: boolean | undefined;
  container?: Node | undefined;
  width?: number;
  title?: string;
  closeFolders?: boolean;
  injectStyles?: boolean;
  touchStyles?: number;
  parent?: GUI;
}

export interface Size {
  width: number;
  height: number;
}

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
export type ShellState = ComponentState<ShellSlots> & {
  isDev: boolean;
  windowSize: Size;
  setWindowSize: Dispatch<SetStateAction<Size>>;
  canvasRef?: any;
  renderer?: any;
  setRenderer: Dispatch<SetStateAction<any>>;
  canvas?: any;
  setCanvas: Dispatch<SetStateAction<any>>;
};

export type ShellContextValue = Omit<ShellState, 'components' | 'root'> & {};

export type ShellContextValues = {
  shell: ShellContextValue;
};