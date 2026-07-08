/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { type JSX, useEffect, useRef, useState } from 'react';
import GUI from 'lil-gui';

import { useShellContext } from './../../Shell';

import type { DevGUIProps } from './DevGUI.types';
import { useDevGUIStyles } from './DevGUI.styles';

/**
 * Render the final JSX of DevGUI
 */
export const DevGUI: React.FC<DevGUIProps> = (props: DevGUIProps): JSX.Element => {
  const { children } = props;
  const guiRef = useRef<undefined | typeof GUI>(undefined);
  const styles = useDevGUIStyles();

  const {} = useShellContext((ctx) => ctx);

  useEffect(() => {
    const gui = new GUI();
    (guiRef as any).current = gui;

    if (!!guiRef) console.log('GUI REF: ', guiRef);

    // gui.add(params, 'speed', 0, 1, 0.01).onChange((value) => {
    //   setParams(prev => ({ ...prev, speed: value }));
    // });

    // gui.addColor(params, 'color').onChange((value) => {
    //   setParams(prev => ({ ...prev, color: value }));
    // });

    // gui.add(params, 'visible').onChange((value) => {
    //     setParams(prev => ({ ...prev, visible: value }));
    // });

    return () => {
      gui.destroy();
    };
  }, []);

  return <div className={styles.root} />;
};
