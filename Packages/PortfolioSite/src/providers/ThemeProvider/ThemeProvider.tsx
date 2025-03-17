/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';

import { randomNumber, tokenValues } from '../../utilities';

import type { ThemeProviderProps } from './ThemeProvider.types';

/**
 * Render the final JSX of ThemeProvider
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
  const { children, providerIdPrefix = 'theme-provider' } = props;
  const divRef = React.useRef<HTMLDivElement>(null);

  const [getIdNumber, setIdNumber] = React.useState(randomNumber(1, 9999));
  const [getStyleTag, setStyleTag] = React.useState<HTMLStyleElement | undefined>(undefined);

  const buildStyleTag = (styleTagId: string) => {
    const newStyle = document.createElement('style');
    newStyle.id = styleTagId;
    let newCssVariables = '';

    for (const [key, value] of Object.entries(tokenValues)) {
      newCssVariables += `--${key}: ${value};\n`;
    }

    newStyle.innerHTML = `
    .${providerIdPrefix}-${getIdNumber} { ${newCssVariables}}`;
    return newStyle;
  }

  React.useEffect(() => {
    const doc = document.documentElement;
    const head = doc.getElementsByTagName('head')[0];

    if (head) {
      if (!!!getStyleTag) {
        const styleTagId = `${providerIdPrefix}-${getIdNumber}`;
        const styleElement = document.getElementById(styleTagId) as HTMLStyleElement | null;

        if (!!!styleElement) {
          const newStyle = buildStyleTag(styleTagId);
          setStyleTag(newStyle);
          head.appendChild(newStyle);
        } else {
          // TODO: Update the style tag
        }
      }
    }
  }, [children, getIdNumber, setIdNumber, providerIdPrefix]);

  return (
      <div 
        ref={divRef}
        className={`theme-provider-${getIdNumber}`}
      >
        {children}
      </div>
  );
};
