import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NavDrawer } from './NavDrawer';
import { avatarUtils } from '../../stories.utils';
import { MdDashboard } from 'react-icons/md';
import { IoLogoWechat } from 'react-icons/io5';
import { BsClipboardData } from 'react-icons/bs';
import { CgMenuRound } from 'react-icons/cg';


const meta: ComponentMeta<typeof NavDrawer> = {
  title: 'Navigation/NavDrawer',
  component: NavDrawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: { docs: { inlineStories: false, } },
  args: {
    user: { imgSrc: avatarUtils.getImg(), name: 'John Doe' },
    menuItems: [
      { type: 'action', icon: <MdDashboard />, title: 'dashboard', onClick: action('dashboard') },
      { type: 'action', icon: <BsClipboardData />, title: 'data', onClick: action('data') },
      { type: 'action', icon: <IoLogoWechat />, title: 'chat', onClick: action('chat') },
      { type: 'section', title: 'Section-1'},
      { type: 'action', icon: <MdDashboard />, title: 'dashboard', onClick: action('dashboard') },
      { type: 'action', icon: <BsClipboardData />, title: 'data', onClick: action('data') },
      { type: 'action', icon: <IoLogoWechat />, title: 'chat', onClick: action('chat') },
      { type: 'break' },
      { type: 'section', title: 'Section-2'},{ type: 'action', icon: <MdDashboard />, title: 'dashboard', onClick: action('dashboard') },
      { type: 'action', icon: <BsClipboardData />, title: 'data', onClick: action('data') },
      { type: 'action', icon: <IoLogoWechat />, title: 'chat', onClick: action('chat') },
      { type: 'break' },
      { type: 'section', title: 'Multi-Level'},
      { type: 'sub-menu', icon: <CgMenuRound />, title: '1 Level', subMenu: [] }
    ],
    onAvatarClick: action('user-avatar'),
    onBrandClick: action('brand'),
  },
  argTypes: {
    brand: { defaultValue: 'Brand', type: 'string' }
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavDrawer> = (args) => <NavDrawer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   // primary: true,
//   // label: 'Button',
// };