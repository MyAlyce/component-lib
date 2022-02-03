import classNames from 'classnames';
import React from 'react';
import type { Size } from '../..';
import { cssSizeMap } from '../../utils';
import { spinnersSvg } from './SpinnerIcons';

export type SpinnerProps = {
    /** If not set or set to `"auto"` will automatically fill the available space */
    size?: Size | 'auto';
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'pulse';
    className?: string;
}

export const Spinner = ({ type = 1, size = 'auto', className }: SpinnerProps) => <div className={classNames("overflow-hidden", className, cssSizeMap[size])}>
    {type === 'pulse' ?
        <div className="bg-secondary-300 h-full w-full animate-pulse" />
        :
        <img src={`data:image/svg+xml;utf8,${spinnersSvg[type - 1]}`} className="animate-spin h-full w-full" />
    }
</div>;