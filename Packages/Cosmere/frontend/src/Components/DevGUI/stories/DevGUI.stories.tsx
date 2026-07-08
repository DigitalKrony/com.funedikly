/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */

import type { Meta, StoryFn } from '@storybook/react';

import { DevGUI } from './..';
import type { DevGUIProps } from './..';

export default {
  title: 'Controls/DevGUI',
  component: DevGUI,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<DevGUIProps> = (args) => {
  return <DevGUI {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as DevGUIProps;
Basic.parameters = {
  options: {  },
};
