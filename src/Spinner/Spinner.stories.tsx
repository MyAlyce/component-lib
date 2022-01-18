import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: ComponentMeta<typeof Spinner> = {
    title: 'Component/Spinner',
    component: Spinner,
    // argTypes
};

export default meta;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Example = Template.bind({});
Example.args = {
//   size: 'md',
};

export const AutoWidth = Template.bind({});
AutoWidth.decorators = [Story => (
    <div style={{ border: 'solid 1px black', width: 100, margin: 'auto', height: 50 }}>
        <Story />
    </div>
)];
AutoWidth.args = {
    size: 'auto-width',
};

