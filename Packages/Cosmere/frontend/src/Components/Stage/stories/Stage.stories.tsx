/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */

import type { Meta, StoryFn } from '@storybook/react';

import { Stage } from './..';
import type { StageProps } from './..';

export default {
  title: 'Controls/Stage',
  component: Stage,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<StageProps> = (args) => {
  return <Stage {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as StageProps;
Basic.parameters = {
  options: {  },
};
