import { isType } from '@giveback007/util-lib';
import React from 'react';
import type { Size } from '../general.types';

const badgeSize = { xs: 'h-2 min-w-2', sm: 'h-3 min-w-3', md: 'h-4 min-w-4', lg: 'h-6 min-w-6', xl: 'h-12 min-w-12' } as const;
const badgeFontSize = { md: 'text-xs', lg: 'text-base', xl: 'text-2xl' } as const;
/** To be contained within parent component: parent must be set to `position: relative;`.
 * 
 * In `xs` & `sm` mode it will not display the number. If the number is `> 999` it will say `+999`
 */
export const Badge = ({ size, badge }: { size: Size, badge?:  boolean | number }) =>
    badge ? <div className={`bg-info-600 rounded-full absolute top-0 right-0 pl-1 pr-1 flex justify-center ${badgeSize[size]}`}>
        {(isType(badge, 'number') && size !== 'sm' && size !== 'xs') && <span className={`m-auto ${badgeFontSize[size]}`}>{badge > 999 ? '+999' : badge}</span>}
    </div> : null;
    