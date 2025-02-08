/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Grid, GridProps } from './..';

export default {
  title: 'Controls/Grid',
  component: Grid,
  decorators: [withPerformance],
} as Meta;

const DefaultTemplate: StoryFn<GridProps> = (args) => {
  return (
    <>
      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 1 }}>
          <div>
            <h2>Grid element types</h2>
            <h3>Alters API</h3>
            <p>
              By either setting 'container' or 'item' to true it alters the required API for the 'Grid'
              implementation. While setting 'container', it notes the 'Grid' as a parent wrapper allowing the
              implementor to set alignment and spacing. When setting 'item', it allows the implementor to set
              column width's and/or hide elements per breakpoint requirements.
            </p>
            <p>This is row by default</p>
            <p>'row' | 'column'</p>
          </div>
        </Grid>
        <Grid item={true} columns={{ xs: 1 }}>
          <div>
            <h2>Alignment</h2>
            <p>
              Values toggle horizontal and vertical when changing the container's itemDirection between column
              and row and are RTL friendly.
            </p>
            <p>'start' | 'center' | 'even' | 'end'</p>
          </div>
        </Grid>
        <Grid item={true} columns={{ xs: 1 }}>
          <div>
            <h2>Spacing</h2>
            <h3>Horizontal || Vertical</h3>
            <p>
              The values for these are associated with Tokens provided by the{' '}
              <code>FluentProvider</code>. Those values can be changed by adjusting you're
              team's implementation of the FluentProvider theme or the Fluent Prop passed into the
              ShellProvider if you're within the PPUX repository
            </p>
            <p>
              These values can be set either as a base value, for a static size, or set per required
              breakpoint to alter layout for the viewport size.
            </p>

            <ul>
              <li>None: '0px' || '0px'</li>
              <li>XXS: tokens.spacingHorizontalXXS || tokens.spacingVerticalXXS</li>
              <li>XS: tokens.spacingHorizontalXS || tokens.spacingVerticalXS</li>
              <li>S: tokens.spacingHorizontalS || tokens.spacingVerticalS</li>
              <li>M: tokens.spacingHorizontalM || tokens.spacingVerticalM</li>
              <li>L: tokens.spacingHorizontalL || tokens.spacingVerticalL</li>
              <li>XL: tokens.spacingHorizontalXL || tokens.spacingVerticalXL</li>
              <li>XXL: tokens.spacingHorizontalXXL || tokens.spacingVerticalXXL</li>
            </ul>
          </div>
        </Grid>
      </Grid>

      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 1 }}>
          <div>
            <h2>Columns</h2>
            <h3>Breakpoints</h3>
            <p>
              These values are set by the Platform design team. Note that these values will soon be adjustable
              via BAF Tokens
            </p>
            <ul>
              <li>
                <b>xs - Small Phone</b> '320px'
              </li>
              <li>
                <b>sm - Large Phone</b> '480px'
              </li>
              <li>
                <b>md - Tablet</b> '768px'
              </li>
              <li>
                <b>lg - Desktop</b> '1024px'
              </li>
              <li>
                <b>xl - Desktop UHD/4k</b> '1200px'
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }}>
            <p>12 Column</p>
          </div>
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }} hide={{ md: true }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 12 }}>
          <div style={{ height: '75px' }} />
        </Grid>
      </Grid>

      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }}>
            <p>8 Column</p>
          </div>
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 8 }}>
          <div style={{ height: '75px' }} />
        </Grid>
      </Grid>

      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 4 }}>
          <div style={{ height: '75px' }}>
            <p>4 Column</p>
          </div>
        </Grid>
        <Grid item={true} columns={{ xs: 4 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 4 }}>
          <div style={{ height: '75px' }} />
        </Grid>
        <Grid item={true} columns={{ xs: 4 }}>
          <div style={{ height: '75px' }} />
        </Grid>
      </Grid>

      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 2 }}>
          <div style={{ height: '75px' }}>
            <p>2 Column</p>
          </div>
        </Grid>
        <Grid item={true} columns={{ xs: 2 }}>
          <div style={{ height: '75px' }} />
        </Grid>
      </Grid>

      <Grid container={true} spacing={{ xs: 'md' }}>
        <Grid item={true} columns={{ xs: 1 }}>
          <div style={{ height: '75px' }}>
            <p>1 Column</p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export const Default = DefaultTemplate.bind({});

Default.args = {} as GridProps;

Default.parameters = {
  options: { fluentVersion: 9 },
  controls: { disable: false },
};
