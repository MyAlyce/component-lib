import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

const meta: ComponentMeta<typeof Modal> = {
  title: 'Component/Modal',
  component: Modal,
  args: {

  },
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Example = Template.bind({});
