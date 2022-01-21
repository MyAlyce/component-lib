import { isType } from '@giveback007/util-lib';
import React, { MouseEventHandler, useState } from 'react';
import type { Size } from '..';
import { Spinner } from '../Spinner/Spinner';
import { cssSizeMap } from '../utils';

import errSvg from './avatar-error.svg';

// TODO:
    // * use 'animate-ping'
    // * use 'React Suspense'

export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';
export type AvatarUser = {
    imgSrc?: string;
    name: { first: string, last: string } | string;
    backgroundColor?: string;
    status?: AvatarStatus;
    badge?: boolean | number;
};

export type AvatarProps = {
    user: AvatarUser | 'loading' | 'error';
    size: Size;
    onClick?: MouseEventHandler;
};

export const Avatar = (p: AvatarProps) => {
    const { user } = p;
    
    const { name, initials } = (() => {
        if (isType(user, 'string')) return {
            initials: '',
            name: user === 'error' ? "Couldn't Load User" : user === 'loading' ? 'Loading...' : ''
        };

        const { name } = user;
        if (isType(name, 'string')) {
            return { initials: name.substring(0, 2), name };
        } else {
            const { first, last } = name;
            return {
                initials: `${first[0].toUpperCase()}${last[0].toUpperCase()}`,
                name: `${first} ${last}`
            };
        }
    })();

    const sz = cssSizeMap[p.size];
    const bgColor = isType(user, 'object') && user.backgroundColor;
    //text-[50px]
    return <div
        onClick={p.onClick}
        className={`
            flex relative justify-center items-center
            m-1 mr-2 rounded-full text-white${bgColor || user === 'loading' ? '' : ' bg-secondary-500'}
            ${user === 'loading' ? ' overflow-hidden' : ''}
            ${sz} ${p.onClick ? ' cursor-pointer' : ''}
        `}
        title={user === 'error' ? "Couldn't Load User" : user === 'loading' ? 'Loading...' : name}
        style={bgColor ? { backgroundColor: bgColor } : {}}
    >
        <AvatarInner user={isType(user, 'object') ? {...user, name, initials} : user} size={p.size} />
    </div>;
};

const AvatarInner = ({ user, size }: { size: Size; user: 'loading' | 'error' | AvatarUser & { initials: string; name: string }}) => {
    if (user === 'loading') return <Spinner size='auto' type='pulse' />;

    if (user === 'error') return <img src={errSvg} className='rounded-full h-full w-full' />;

    const { initials, imgSrc, status, badge } = user;
    const [imgStatus, setImgStatus] = useState<'loading' | 'error' | 'success'>(imgSrc ? 'loading' : 'error');
    return <>
        {/* Badge */}
        <Badge size={size} badge={badge} />
        
        {/* User image */}
        {imgStatus === 'error' ? 
            initials
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

const badgeSize = { xs: 'h-2 min-w-2', sm: 'h-3 min-w-3', md: 'h-4 min-w-4', lg: 'h-6 min-w-6', xl: 'h-12 min-w-12' } as const;
const fontSize = { md: 'text-xs', lg: 'text-base', xl: 'text-2xl' } as const;
const Badge = ({ size, badge }: { size: Size, badge?:  boolean | number }) =>
    badge ? <div className={`bg-info-600 rounded-full absolute top-0 right-0 pl-1 pr-1 flex justify-center ${badgeSize[size]}`}>
        {(isType(badge, 'number') && size !== 'sm' && size !== 'xs') && <span className={`m-auto ${fontSize[size]}`}>{badge > 999 ? '+999' : badge}</span>}
    </div> : null;

const statusSize = { xs: 'h-2 w-2', sm: 'h-3 w-3', md: 'h-4 w-4', lg: 'h-6 w-6', xl: 'h-12 w-12' } as const;
const statusColor = { online: 'bg-success-500', offline: 'bg-danger-500', busy: 'bg-warning-500', away: 'bg-secondary-500' };
const Status = (p: { size: Size, status: AvatarStatus }) => <span className="flex absolute bottom-0 right-0">
    {p.status === 'online' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>}
    <span className={`relative inline-flex rounded-full ${statusColor[p.status]} ${statusSize[p.size]}`}></span>
</span>;
