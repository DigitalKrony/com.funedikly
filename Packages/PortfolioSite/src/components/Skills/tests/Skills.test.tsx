/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Skills } from '../Skills';

expect.extend(toHaveNoViolations);

describe('Skills', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Skills skillList={[]}>Default Skills A11y</Skills>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Skills skillList={[]}>Default Skills</Skills>);
    expect(container).toMatchSnapshot();
  });
});
