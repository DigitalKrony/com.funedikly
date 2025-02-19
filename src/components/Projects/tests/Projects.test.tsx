/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Projects } from './../Projects';

expect.extend(toHaveNoViolations);

describe('Projects', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Projects coProjList={[{}]} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Projects coProjList={[{}]} />);
    expect(container).toMatchSnapshot();
  });
});
