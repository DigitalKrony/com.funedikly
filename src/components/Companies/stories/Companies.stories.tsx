/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Companies, CompaniesProps } from './..';

export default {
  title: 'Controls/Companies',
  component: Companies,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<CompaniesProps> = (args) => {
  return <Companies {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as CompaniesProps;

Default.parameters = {
  options: {  },
  controls: { disable: false },
};
