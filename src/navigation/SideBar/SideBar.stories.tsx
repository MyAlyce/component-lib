import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SideBar } from './SideBar';

const meta: ComponentMeta<typeof SideBar> = {
  title: 'Navigation/SideBar',
  component: SideBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Workaround for "fixed" components
  decorators: [Story => <div style={{
    transform: 'scale(1)',
    height: '100vh',
  }}>{Story()}</div>],
  
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  // label: 'Button',
};