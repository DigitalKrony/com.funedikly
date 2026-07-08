/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */

import type { Meta, StoryFn } from '@storybook/react';

import { Sun } from './..';
import type { SunProps } from './..';

export default {
  title: 'Controls/Sun',
  component: Sun,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<SunProps> = (args) => {
  return <Sun {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as SunProps;
Basic.parameters = {
  options: {  },
};
