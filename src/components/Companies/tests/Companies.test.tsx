/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Companies } from './../Companies';

expect.extend(toHaveNoViolations);

describe('Companies', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Companies>Default Companies A11y</Companies>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Companies>Default Companies</Companies>);
    expect(container).toMatchSnapshot();
  });
});
