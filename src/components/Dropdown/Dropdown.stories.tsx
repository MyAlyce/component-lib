import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

const meta: ComponentMeta<typeof Dropdown> = {
    title: 'Component/Dropdown',
    component: Dropdown,
    args: {
        items: [
            { type: 'action', title: 'action-1', onClick: action('action-1') },
            { type: 'action', title: 'action-2', onClick: action('action-2') },
            { type: 'break' },
            { type: 'action', title: 'separated-action', onClick: action('separated-action') },
            { type: 'break' },
            { type: 'section', title: 'Section'},
            { type: 'action', title: 'action-3', onClick: action('action-3') },
            { type: 'action', title: 'action-4', onClick: action('action-4') },
        ],
        children: <Button
                type='primary'
                // onClick={() => setShow(!show)}
                // className='fixed left-1/2'
        >Toggle Dropdown</Button>
    },
    argTypes: {
        header: { defaultValue: '', type: 'string' }
    },
    decorators: [Story => <div className='flex justify-center'>{Story()}</div>]
};

export default meta;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Example = Template.bind({});

export const JsxHeader = Template.bind({});

export const JsxItems = Template.bind({});
