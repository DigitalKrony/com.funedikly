import * as React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Projects } from './../Projects';

expect.extend(toHaveNoViolations);

describe('Projects', () => {
  it('should not have a11y violations', async () => {
    const { container } = render(<Projects>Default Projects A11y</Projects>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('renders a default state', () => {
    const { container } = render(<Projects>Default Projects</Projects>);
    expect(container).toMatchSnapshot();
  });
});
