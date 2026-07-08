/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

/** @jsxRuntime automatic */

import type { Meta, StoryFn } from '@storybook/react';

import { %name.pascal% } from './..';
import type { %name.pascal%Props } from './..';

export default {
  title: 'Controls/%name.pascal%',
  component: %name.pascal%,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<%name.pascal%Props> = (args) => {
  return <%name.pascal% {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {} as %name.pascal%Props;
Basic.parameters = {
  options: {  },
};
