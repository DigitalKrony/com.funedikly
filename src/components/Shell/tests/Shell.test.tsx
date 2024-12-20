import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Shell } from '../Shell';

expect.extend(toHaveNoViolations);

describe('Shell', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Shell>Default Shell A11y</Shell>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Shell>Default Shell</Shell>);
    expect(container).toMatchSnapshot();
  });
});
