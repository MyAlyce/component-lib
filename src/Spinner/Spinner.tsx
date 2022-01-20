import type { Size } from '..';
import React from 'react';
import { cssSizeMap } from '../utils';

import l1 from './svg/spinner-1.svg';
import l2 from './svg/spinner-2.svg';
import l3 from './svg/spinner-3.svg';
import l4 from './svg/spinner-4.svg';
import l5 from './svg/spinner-5.svg';
import l6 from './svg/spinner-6.svg';
import l7 from './svg/spinner-7.svg';
import l8 from './svg/spinner-8.svg';
import l9 from './svg/spinner-9.svg';
import l10 from './svg/spinner-10.svg';
import l11 from './svg/spinner-11.svg';


const spinnersSvg = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11];

export type SpinnerProps = {
    /** If not set or set to `"auto"` will automatically fill the available space */
    size?: Size | 'auto';
    type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 'pulse';
}

export const Spinner = ({ type = 1, size = 'auto' }: SpinnerProps) => (<div className={`overflow-hidden ${cssSizeMap[size]}`}>
    {type === 'pulse' ?
        <div className="bg-secondary-400 h-full w-full animate-pulse" />
        :
        <img src={spinnersSvg[type - 1]} className={`animate-spin h-full w-full`} />
    }
</div>);