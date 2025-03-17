/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

import { Header, HeaderProps } from "..";

export default {
  title: "Controls/Header",
  component: Header,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as HeaderProps;

Default.parameters = {
  options: { },
  controls: { disable: false },
};
