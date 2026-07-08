/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { useState, useRef, useEffect } from 'react';
import { getIntrinsicElementProps, slot } from '@fluentui/react-utilities';
import { events } from '@react-three/fiber';

import { type ShellProps, type ShellState } from './Shell.types';

/**
 * Create the state required to render  Shell.
 *
 * The returned state can be modified with hooks such as use ShellStyles,
 * before being passed to render Shell.
 *
 * @param props - props from this instance of Shell
 * @param ref - reference to root HTMLElement of Shell
 */
export const useShell = (
  props: ShellProps,
  ref: React.Ref<HTMLElement> & React.Ref<HTMLDivElement>
): ShellState => {
  const canvasRef = useRef(null);

  const [isDev, setIsDev] = useState<boolean>(process.env.NODE_ENV === 'development');
  const [canvas, setCanvas] = useState<any | undefined>(undefined);
  const [renderer, setRenderer] = useState<any>(undefined);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (!!!canvas) return;

    const resize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', resize);
    canvas.configure({
      events,
      camera: { position: [0, 0, 50] },
      size: { width: window.innerWidth, height: window.innerHeight },
    });

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [canvas]);

  useEffect(() => {
    if (!!!canvas) return;

    canvas.configure({ size: { width: windowSize.width, height: windowSize.height } });
  }, [windowSize]);

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
    isDev,
    canvasRef,
    windowSize,
    setWindowSize,
    canvas,
    setCanvas,
    renderer,
    setRenderer,
  };

  return state;
};
