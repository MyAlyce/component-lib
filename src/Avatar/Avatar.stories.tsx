import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';
import { rand } from '@giveback007/util-lib';

const getStatus = () => (['online', 'offline', 'away', 'busy', undefined] as const)[rand(0, 5)];
const args: AvatarProps = {
    size: 'lg',
    user: { name: 'Jon Doe', status: getStatus(), imgSrc: 'https://randomuser.me/api/portraits/men/31.jpg' }
};

const meta: ComponentMeta<typeof Avatar> = {
    title: 'Component/Avatar',
    component: Avatar,
    parameters: {
        // docs: { inlineStories: false }
        // controls: { expanded: true },
    },
    args,
    argTypes: {
    }
};

export default meta;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Example = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
    size: 'lg',
    user: 'loading',
};

export const Error = Template.bind({});
Error.args = {
    size: 'lg',
    user: 'error',
};


interface RandomUser {
    results: {
        gender:     string;
        name:       {
            title: string;
            first: string;
            last:  string;
        };
        location:   {
            street:      string;
            city:        string;
            state:       string;
            postcode:    string;
            coordinates: {
                latitude:  string;
                longitude: string;
            };
            timezone:    {
                offset:      string;
                description: string;
            };
        };
        email:      string;
        login:      {
            uuid:     string;
            username: string;
            password: string;
            salt:     string;
            md5:      string;
            sha1:     string;
            sha256:   string;
        };
        dob:        {
            date: string;
            age:  number;
        };
        registered: {
            date: string;
            age:  number;
        };
        phone:      string;
        cell:       string;
        id:         {
            name:  string;
            value: string;
        };
        picture:    {
            large:     string;
            medium:    string;
            thumbnail: string;
        };
        nat:        string;
    }[];
    info:    {
        seed:    string;
        results: number;
        page:    number;
        version: string;
    };
}
