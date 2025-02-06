/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

import { Footer, FooterProps } from "./..";

export default {
  title: "Controls/Footer",
  component: Footer,
  decorators: [withPerformance],
} as Meta;

const Template: StoryFn<FooterProps> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});

Default.args = {} as FooterProps;

Default.parameters = {
  options: { },
  controls: { disable: false },
};
