import { fn } from "@storybook/test";
import { PrimaryButton } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PrimaryButton> = {
  title: "parts/button/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {
    onClick: fn(() => {
      console.log("clicked");
    }),
  },
};
