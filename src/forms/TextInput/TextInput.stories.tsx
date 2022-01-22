import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: ComponentMeta<typeof TextInput> = {
    title: 'Forms/TextInput',
    component: TextInput,
    args: {
        placeholder: 'placeholder'
    }
};

export default meta;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Example = Template.bind({});
