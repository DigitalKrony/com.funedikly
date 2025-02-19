/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Type, TypeProps } from './..';

export default {
  title: 'Controls/Type',
  component: Type,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<TypeProps> = (args) => {
  return <Type {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as TypeProps;

Default.parameters = {
  options: {  },
  controls: { disable: false },
};
