import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "./index";

const meta = {
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Testaaa",
  },
};
