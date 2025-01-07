import { Meta, StoryObj } from '@storybook/react';
import Button from "../Components/Button";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
    component: Button
};

console.log(meta)

type Story = StoryObj<StoryProps>;

export default meta;

export const Primary: Story = {};