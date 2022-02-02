import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Dropdown } from './Dropdown';

const meta: ComponentMeta<typeof Dropdown> = {
    title: 'Component/Dropdown',
    component: Dropdown,
    args: {

    }
};

export default meta;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Example = Template.bind({});