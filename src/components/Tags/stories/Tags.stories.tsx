import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { Tags, TagsProps } from './..';

export default {
  title: 'Controls/Tags',
  component: Tags,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<TagsProps> = (args) => {
  return <Tags {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  tagList: ['']
} as TagsProps;

Default.parameters = {
  options: { },
  controls: { disable: false },
};
