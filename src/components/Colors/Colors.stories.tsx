import * as React from "react";
import { Colors, ColorsProps } from "./Colors";
import { Meta } from "@storybook/react";

const meta = {
  title: "TriMet/Colors",
  component: Colors,
} as Meta;

export default meta;

const Template = (args: ColorsProps) => <Colors />;

export const PrimaryColors = Template.bind({});
PrimaryColors.args = {};
