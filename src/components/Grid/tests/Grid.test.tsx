/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './../Grid';

describe('Grid', () => {
  it('renders a default state', () => {
    expect.assertions(1);
    const view = render(<Grid container={true}>Default Grid</Grid>);
    expect(view.container).toMatchSnapshot();
  });
});
