/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Projects, ProjectsProps } from '..';

export default {
  title: 'Controls/Projects',
  component: Projects,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<ProjectsProps> = (args) => {
  return <Projects {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as ProjectsProps;

Default.parameters = {
  options: {  },
  controls: { disable: false },
};
