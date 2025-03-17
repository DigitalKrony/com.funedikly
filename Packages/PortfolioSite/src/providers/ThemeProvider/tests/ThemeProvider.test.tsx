/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { ThemeProvider } from '../ThemeProvider';

expect.extend(toHaveNoViolations);

describe('ThemeProvider', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<ThemeProvider>Default ThemeProvider A11y</ThemeProvider>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<ThemeProvider>Default ThemeProvider</ThemeProvider>);
    expect(container).toMatchSnapshot();
  });
});
