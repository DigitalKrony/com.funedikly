/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Footer } from '../Footer';

expect.extend(toHaveNoViolations);

describe('Footer', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Footer>Default Footer A11y</Footer>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Footer>Default Footer</Footer>);
    expect(container).toMatchSnapshot();
  });
});
