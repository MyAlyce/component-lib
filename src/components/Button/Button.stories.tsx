import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

const meta: ComponentMeta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
