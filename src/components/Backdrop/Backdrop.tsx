import classNames from 'classnames';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import type { ComponentBase } from '../../general.types';

export type BackdropProps = {
    zIndex: number;
    onBackdropClick?: MouseEventHandler;
    /** Opacity to transition into when backdrop gets activated. Number between 0 to 100. Default: `40` */
    maxOpacity?: number;
} & ComponentBase;

export const Backdrop = ({ zIndex, onBackdropClick, maxOpacity = 40, style = {}, className }: BackdropProps) => {
    const [opacity, setOpacity] = useState(false);
    useEffect(() => !opacity && setTimeout(() => setOpacity(true), 0) as any, [zIndex]);

    return <div
        className={classNames(
            'fixed top-0 left-0 right-0 w-screen h-screen bg-black transition-opacity duration-500',
            opacity ? 'opacity-50' : 'opacity-0',
            className
        )}
        style={{ zIndex, opacity: Number((maxOpacity / 100).toFixed(2)), ...style }}
        onClick={onBackdropClick}
    ></div>;
};
