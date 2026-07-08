/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import type { ShellProps } from '..';
import { Shell } from '..';

export default {
  title: 'Controls/Shell',
  component: Shell,
} as Meta;

const Template: StoryFn<ShellProps> = (args: any) => {
  return <Shell {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as ShellProps;

Default.parameters = {
  options: {},
  controls: { disable: false },
};
