import React from "react";
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { GrChatOption, GrNotification } from 'react-icons/gr';
import { TopBar } from "./TopBar";
import { Dropdown } from "../../components/Dropdown/Dropdown";

const meta: ComponentMeta<typeof TopBar> = {
    title: 'Navigation/TopBar',
    component: TopBar,
    parameters: { docs: { iframeHeight: 100, inlineStories: false, } },
    args: {
      leftNavItems: [
        { children: 'Home', onClick: action('Home') },
        { children: 'Contact', onClick: action('Contact') }
      ],
      rightNavItems: [
        {
          children: <Dropdown
            items={[
              { type: 'action', title: 'action-1', onClick: action('action-1') },
              { type: 'action', title: 'action-2', onClick: action('action-2') },
              { type: 'break' },
              { type: 'action', title: 'separated-action', onClick: action('separated-action') },
            ]}
            show
          >
            <GrChatOption className="svg-fix" />
          </Dropdown>,
          onClick: action('Chat')
        }, {
          children: <GrNotification className="svg-fix" />,
          onClick: action('Notification')
        }
      ]
    }
};

export default meta;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Example = Template.bind({});