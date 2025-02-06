/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Typography } from './../Typography';

expect.extend(toHaveNoViolations);

describe('Typography', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Typography>Default Typography A11y</Typography>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Typography>Default Typography</Typography>);
    expect(container).toMatchSnapshot();
  });
});
