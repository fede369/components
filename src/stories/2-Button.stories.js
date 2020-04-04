import React from 'react';
import { action } from '@storybook/addon-actions';
import ButtonSmall from '../elements/buttonSmall';
import ButtonLarge from '../elements/buttonLarge';


export default {
    title: 'Button',
    component: ButtonSmall,
};

export const Button_Small = () => <ButtonSmall onClick={action('clicked')} id="signin" text="Text" />;
export const Button_Large = () => <ButtonLarge onClick={action('clicked')} text="Text" />;

