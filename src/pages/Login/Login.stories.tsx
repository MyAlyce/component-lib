import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginPage } from "./Login";

const meta: ComponentMeta<typeof LoginPage> = {
    title: 'Page/Login',
    component: LoginPage,
    args: {

    }
};

export default meta;

const Template: ComponentStory<typeof LoginPage> = (args) => <LoginPage {...args} />;

export const Example = Template.bind({});

export const RegularLoginOnly = Template.bind({});

export const ThirdPartyLogin = Template.bind({});