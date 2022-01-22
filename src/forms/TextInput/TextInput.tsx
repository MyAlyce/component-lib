import React from 'react';
import type { HTMLProps } from 'react';

export type TextInputProps = {
    validation?: 'primary' | 'success' | 'warning' | 'danger';
    placeholder?: string;
    disabled?: boolean;
} & HTMLProps<HTMLInputElement>;

const TextInputBorderMap = { primary: 'border-secondary-300 focus:border-primary-400', success: 'border-success-400', warning: 'border-warning-400', danger: 'border-danger-400' };
export const TextInput = ({ validation = 'primary', className, ...props }: TextInputProps) => {

    return <input
        {...props}
        className={`
            px-3 py-1.5
            outline-0 border rounded ${TextInputBorderMap[validation]}
            ${props.disabled && 'bg-secondary-200'}
            ${className}
        `}
    />;
};
