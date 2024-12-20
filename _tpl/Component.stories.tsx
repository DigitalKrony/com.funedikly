import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

import { %name.pascal%, %name.pascal%Props } from './..';

export default {
  title: 'Controls/%name.pascal%',
  component: %name.pascal%,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<%name.pascal%Props> = (args) => {
  return <%name.pascal% {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as %name.pascal%Props;

Default.parameters = {
  options: {  },
  controls: { disable: false },
};
