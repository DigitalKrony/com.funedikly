/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Header } from '../Header';

expect.extend(toHaveNoViolations);

describe('Header', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Header>Default Header A11y</Header>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Header>Default Header</Header>);
    expect(container).toMatchSnapshot();
  });
});
