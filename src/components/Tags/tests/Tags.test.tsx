/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Tags } from './../Tags';

expect.extend(toHaveNoViolations);

describe('Tags', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Tags tagList={['']}>Default Tags A11y</Tags>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Tags tagList={['']}>Default Tags</Tags>);
    expect(container).toMatchSnapshot();
  });
});
