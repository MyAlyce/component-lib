import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';
import type { DataState, Size } from '../..';
import { cssSizeMap } from '../../utils';
import { AvatarInner, AvatarInnerProps, AvatarStatus } from "../Avatar/Avatar";

export type AvatarGroupProps = {
    avatars: {
        dataState: DataState;
        imgSrc?: string;
        name?: { first: string, last: string } | string;
        backgroundColor?: string;
        status?: AvatarStatus;
    }[];
    maxShow?: number;
    onClick?: MouseEventHandler;
    size: Size;
    className?: string;
}

export const AvatarGroup = (p: AvatarGroupProps) => {
    const { maxShow = 5, avatars, size, onClick } = p;
    if (maxShow < 1) {
        console.error('Property "maxShow" can\'t be less than 1');
        return null;
    }

    const show = avatars.slice(0, maxShow);
    const nNotShow = avatars.length - show.length;
    return <div
        className={classNames("flex flex-row-reverse justify-center mt-10", onClick && 'cursor-pointer', p.className)}
        onClick={onClick}
    >
        {nNotShow > 0 && <div 
            className={classNames(`
                flex flex-shrink-0 relative
                bg-secondary-500
                justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 text-xl text-white`,
                cssSizeMap[size]
            )}
        >
            <AvatarInner size={size} dataState='done' name={`+${nNotShow}`} />
        </div>}
        {show.map((av, i) => {
            const { dataState, backgroundColor, imgSrc, name, status } = av;
            const props: AvatarInnerProps = { dataState, name, imgSrc, status, size };
            return <div
                className={classNames(
                    `flex flex-shrink-0 relative justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white`,
                    !(av.backgroundColor || av.dataState === 'loading') && 'bg-secondary-500',
                    cssSizeMap[size],
                )}
                style={{ backgroundColor }}
                key={i}
            >
                <AvatarInner {...props} />
            </div>;
        })}
    </div>;
};
