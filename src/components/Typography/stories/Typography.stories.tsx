/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Typography, TypographyProps } from './..';

export default {
  title: 'Controls/Typography',
  component: Typography,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => {
  return <Typography {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as TypographyProps;

Default.parameters = {
  options: {  },
  controls: { disable: false },
};
