import React from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";

const args: AccordionProps = {
    title: 'FAQ - Order, Shipping, Etc.',
    collapseOthers: true,
    items: [
        {
            title: 'When will my order arrive?',
            children: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation',
        }, {
            title: 'What\'s your return policy?',
            children: 'Once shipped, you\'ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.',
        }, {
            title: 'Title - 3',
            children: 'We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we\'ll ship a return label.',
        }, {
            title: 'Title - 4',
            children: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation',
        }, {
            title: 'Title - 5',
            children: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation',
        }, {
            title: 'Title - 6',
            children: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation',
        }, 
    ],
};

const meta: ComponentMeta<typeof Accordion> = {
    title: 'Component/Accordion',
    component: Accordion,
    args
};

export default meta;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Example = Template.bind({});

export const JsxDetails = Template.bind({});

// im building the accordion, so first need some data
