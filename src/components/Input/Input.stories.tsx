import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Input, { InputTextProps } from "./Input";

const exportDefault: Meta<typeof Input> = {
  title: "ReactComponentLibrary/Input",
  component: Input,
};

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const DefaultInput: StoryFn<InputTextProps> = Template.bind({});
DefaultInput.args = {
  placeholder: "Text",
};

export const DisabledInput: StoryFn<InputTextProps> = Template.bind({});
DisabledInput.args = {
  disabled: true,
};

export default exportDefault;