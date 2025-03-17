/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Type } from '../Type';

expect.extend(toHaveNoViolations);

describe('Type', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Type>Default Type A11y</Type>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Type>Default Type</Type>);
    expect(container).toMatchSnapshot();
  });
});
