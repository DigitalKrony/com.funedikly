/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */

import type { Meta, StoryFn } from '@storybook/react';

import { Planet } from './..';
import type { PlanetProps } from './..';

export default {
  title: 'Controls/Planet',
  component: Planet,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<PlanetProps> = (args) => {
  return <Planet {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as PlanetProps;
Basic.parameters = {
  options: {  },
};
