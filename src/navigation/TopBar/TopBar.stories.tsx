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
            // show
            align="right"
            containerClassName='w-full h-full'
            className="mt-4"
          >
            <GrChatOption className="svg-fix" />
          </Dropdown>,
          onClick: action('Chat')
        }, {
          children: <Dropdown
            items={[
              { type: 'action', title: 'action-1', onClick: action('action-1') },
              { type: 'action', title: 'action-2', onClick: action('action-2') },
              { type: 'break' },
              { type: 'action', title: 'separated-action', onClick: action('separated-action') },
            ]}
            // show
            align="right"
            containerClassName='w-full h-full'
            className="mt-4"
          >
            <GrNotification className="svg-fix" />
          </Dropdown>,
          onClick: action('Notification')
        }
      ],
      addSpacer: true,
    },
    decorators: [Story => <>
      {Story()}
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </>]
};

export default meta;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Example = Template.bind({});