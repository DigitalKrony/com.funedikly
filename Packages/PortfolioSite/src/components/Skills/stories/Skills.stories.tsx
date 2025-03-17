/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Skills, SkillsProps } from '..';

export default {
  title: 'Controls/Skills',
  component: Skills,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<SkillsProps> = (args) => {
  return <Skills {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  skillList: []
} as SkillsProps;

Default.parameters = {
  options: { },
  controls: { disable: false },
};
