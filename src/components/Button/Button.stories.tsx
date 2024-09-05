import { StoryFn, Meta } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import React from "react";
import Button, { ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const ExportDefault: Meta<typeof Button> = {
  title: "ReactComponentLibrary/Button",
  component: Button,
  args: {
    onClick: action('on-click'),
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton: StoryFn<ButtonProps> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {
  label: "Default button",
};

export const DisabledButton: StoryFn<ButtonProps> = Template.bind({});
DisabledButton.args = {
  label: "Disabled button",
  disabled: true,
};

export default ExportDefault;
