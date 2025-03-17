/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { ThemeProvider, ThemeProviderProps } from '..';

export default {
  title: 'Controls/ThemeProvider',
  component: ThemeProvider,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<ThemeProviderProps> = (args) => {
  return <ThemeProvider {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as ThemeProviderProps;

Default.parameters = {
  options: {  },
  controls: { disable: false },
};
