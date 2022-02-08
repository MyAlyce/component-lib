import React from 'react';
import classNames from 'classnames';
import type { HTMLProps } from 'react';
import type { ColorTypes } from '../../general.types';
import { Button } from '../..';

export type TextInputProps = {
    // size?: Size | 'auto';
    validation?: 'default' | 'success' | 'warning' | 'danger';
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    labelType?: 'default' | 'row:2/5' | 'row:1/3' | 'row:1/4' | 'addon';
    button?: { type?: ColorTypes; outline?: boolean; onClick?: () => any; label: string };
    /**
     * This will only be applied when label or button are present, allowing to style the input when it's embedded.
     * Otherwise `className` will be applied.
     */
    inputClassName?: string;
} & HTMLProps<HTMLInputElement>;

const TextInputBorderMap = {
    default: 'border-secondary-300 placeholder-secondary-300 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-200',
    success: 'border-success-400 placeholder-success-300 focus:outline-none focus:ring-1 focus:ring-success-200',
    warning: 'border-warning-400 placeholder-warning-300 focus:outline-none focus:ring-1 focus:ring-warning-200',
    danger: 'border-danger-400 placeholder-danger-300 focus:outline-none focus:ring-1 focus:ring-danger-200',
};
export const TextInput = ({
    validation = 'default', className,
    label, labelType = 'default', inputClassName,
    button, ...props
}: TextInputProps) => {
    const lbType = (label || false) && labelType;
    const input = <input
        {...props}
        className={classNames(
            "px-3 py-1.5 outline-0 border w-full",
            TextInputBorderMap[validation],
            props.disabled && 'bg-secondary-200',
            lbType !== 'addon' && 'rounded-l-sm', 
            !button && 'rounded-r',
            !(label || button) ? className : inputClassName,
        )}
    />;

    return (label || button) ? <div className={classNames(
            'flex',
            lbType === 'default' ? 'flex-col' : 'flex-row',
            className
    )}>
        {label && <div
            className={classNames(
                'flex',
                lbType === 'default' && 'pb-2',
                lbType === 'row:1/3' && 'w-1/3',
                lbType === 'row:1/4' && 'w-1/4',
                lbType === 'row:2/5' && 'w-2/5',
                lbType === 'addon' && 'border border-secondary-400 rounded-l-sm py-0.5 px-3 bg-secondary-200 text-secondary-500'
            )}
        >
            <span className={classNames(lbType !== 'default' && 'm-auto')}>{label}</span>
        </div>}
        {button ?
            <div className='flex flex-row w-full'>
                {input}
                <Button shape='flat' className='rounded-r-sm' {...button}>{button.label}</Button>
            </div>
            :
            input
        }
    </div> : input;
};
