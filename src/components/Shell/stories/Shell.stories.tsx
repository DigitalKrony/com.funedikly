import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

import { Shell, ShellProps } from "..";

export default {
  title: "Wrapper/Shell",
  component: Shell,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<ShellProps> = (args) => {
  return <Shell {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as ShellProps;

Default.parameters = {
  controls: { disable: false },
};
