/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import { Card, Title1 } from '@fluentui/react-components';

import { Grid, GridProps } from './..';

export default {
  title: 'Controls/Grid',
  component: Grid,
  decorators: [withPerformance],
} as Meta;

const ComplexTemplate: StoryFn<GridProps> = (args) => {
  return (
    <Grid
      container={true}
      columnSpacing={{ base: 'md', md: 'lg', xl: 'xxl' }}
      rowSpacing={{ base: 'md', md: 'lg', xl: 'xxl' }}
      itemHorizontalAlignment={'center'}
    >
      <Grid item={true} columns={{ base: 1, md: 4, xl: 2 }}>
        <Card style={{ height: '75px' }} />
      </Grid>
      <Grid item={true} columns={{ base: 1, md: 4, xl: 2 }}>
        <Card style={{ height: '75px' }} />
      </Grid>
      <Grid item={true} columns={{ base: 1, md: 2, xl: 1 }}>
        <Card style={{ height: '75px' }} />
      </Grid>
      <Grid item={true} columns={{ base: 1 }} hide={{ md: true }}>
        <Title1 block={true} align={'center'}>
          Just another title line
        </Title1>
      </Grid>
      <Grid item={true} columns={{ base: 1, md: 2, xl: 1 }}>
        <Card style={{ height: '75px' }} />
      </Grid>
      <Grid item={true} columns={{ base: 1, md: 4, xl: 2 }}>
        <Card style={{ height: '75px' }} />
      </Grid>
      <Grid item={true} columns={{ base: 1, md: 4, xl: 2 }}>
        <Card style={{ height: '75px' }} />
      </Grid>
    </Grid>
  );
};

export const Complex = ComplexTemplate.bind({});

Complex.args = {} as GridProps;

Complex.parameters = {
  options: { fluentVersion: 9 },
  controls: { disable: false },
};
