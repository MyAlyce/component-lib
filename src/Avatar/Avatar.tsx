import { isType } from '@giveback007/util-lib';
import React, { MouseEventHandler, useState } from 'react';
import type { DataState, Size } from '..';
import { Badge } from '../Badge/Badge';
import { Spinner } from '../Spinner/Spinner';
import { cssSizeMap } from '../utils';

import errSvg from './avatar-error.svg';

export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export type AvatarProps = {
    dataState: DataState;
    imgSrc?: string;
    name?: { first: string, last: string } | string;
    backgroundColor?: string;
    status?: AvatarStatus;
    badge?: boolean | number;
    size: Size;
    onClick?: MouseEventHandler;
};

export const Avatar = (p: AvatarProps) => {
    const { dataState, imgSrc, backgroundColor, status, badge, size, onClick } = p;
    
    const name = (() => {
        if (dataState === 'loading' || dataState === 'error')
            return dataState === 'error' ? "Couldn't Load User" : dataState === 'loading' ? 'Loading...' : '';
        
        if (isType(p.name, 'string') || !p.name)
            return p.name || '';
            
        const { first, last } = p.name;
        return `${first} ${last}`;
    })();
    
    return <div
        onClick={onClick}
        className={`
            flex relative justify-center items-center
            m-1 mr-2 rounded-full text-white${backgroundColor || dataState === 'loading' ? '' : ' bg-secondary-500'}
            ${dataState === 'loading' ? ' overflow-hidden' : ''}
            ${cssSizeMap[size]} ${onClick ? ' cursor-pointer' : ''}
        `}
        title={dataState === 'error' ? "Couldn't Load User" : dataState === 'loading' ? 'Loading...' : name}
        style={{ backgroundColor }}
    >
        <AvatarInner {...{ dataState, imgSrc, badge, size, status, name }} />
    </div>;
};

export type AvatarInnerProps = {
    dataState: DataState,
    size: Size;
    imgSrc?: string,
    status?: AvatarStatus,
    badge?: boolean | number, name: AvatarProps['name']
}

const avatarFontSize = { xs: 'text-sm', sm: 'text-xl', md: 'text-4xl', lg: 'text-7xl', xl: 'text-9xl' } as const;
export const AvatarInner = (p: AvatarInnerProps) => {
    if (p.dataState === 'loading') return <Spinner size='auto' type='pulse' />;
    if (p.dataState === 'error') return <img src={errSvg} className='rounded-full h-full w-full' />;

    const { imgSrc, status, badge, size, name = '' } = p;
    const [imgStatus, setImgStatus] = useState<'loading' | 'error' | 'success'>(imgSrc ? 'loading' : 'error');

    const initials = isType(name, 'string') ? name.substring(0, 2) : `${name.first[0].toUpperCase()}${name.last[0].toUpperCase()}`;

    return <>
        {/* Badge */}
        <Badge size={size} badge={badge} />
        
        {/* User image */}
        {imgStatus === 'error' ? 
            <span className={avatarFontSize[size]}>{initials}</span>
            :
            <img
                className="rounded-full h-full w-full"
                src={imgSrc}
                onLoad={() => setImgStatus('success')}
                onError={() => setImgStatus('error')}
            />
        }

        {/* Status */}
        {status && <Status size={size} status={status} />}
    </>;
};



const statusSize = { xs: 'h-2 w-2', sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-6 w-6', xl: 'h-12 w-12' } as const;
const statusColor = { online: 'bg-success-500', offline: 'bg-danger-500', busy: 'bg-warning-500', away: 'bg-secondary-500' };
const Status = (p: { size: Size, status: AvatarStatus }) => <span className="flex absolute bottom-0 right-0">
    {p.status === 'online' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>}
    <span className={`relative inline-flex rounded-full ${statusColor[p.status]} ${statusSize[p.size]}`}></span>
</span>;
