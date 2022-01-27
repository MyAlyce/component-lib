import React from "react";
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { GrChatOption, GrNotification } from 'react-icons/gr';
import { TopBar } from "./TopBar";

const meta: ComponentMeta<typeof TopBar> = {
    title: 'Navigation/TopBar',
    component: TopBar,
    parameters: { docs: { iframeHeight: 100, inlineStories: false, } },
    args: {
      leftNavItems: [{ childJsx: 'Home', onClick: action('Home') }, { childJsx: 'Contact', onClick: action('Contact') }],
      rightNavItems: [
        { childJsx: <GrChatOption className="svg-fix" />, onClick: action('Chat') },
        { childJsx: <GrNotification className="svg-fix" />, onClick: action('Notification') }
      ]
    }
};

export default meta;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Example = Template.bind({});