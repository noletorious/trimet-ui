import * as React from "react";
import { Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "TriMet/Button",
  component: Button,
  argTypes: {
    label: { control: { type: "text" } },
    size: { options: ["small", "medium", "large"], defaultValue: "medium" },
    onClick: { table: { disable: true } },
  },
} as Meta;

export default meta;

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  variant: "primary",
  onClick: action("Primary click"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variant: "secondary",
  onClick: action("Secondary click"),
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline",
  variant: "outline",
  onClick: action("Outline click"),
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text",
  onClick: action("Text click"),
};

export const LongTextExample = Template.bind({});
LongTextExample.args = {
  label: "Oh lordy! This button has a really long text",
  variant: { table: { disable: true } },
};
