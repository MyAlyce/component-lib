import { wait } from '@giveback007/util-lib';
import React, { MouseEventHandler, useEffect, useState } from 'react';
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
    // badge?: boolean | number;
};

export type AvatarProps = {
    user: AvatarUser | 'loading' | 'error';
    size: Size;
    onClick?: MouseEventHandler;
};

export const Avatar = (p: AvatarProps) => {
    
    const { user } = p;
    console.log(user);
    
    const { name, initials } = (() => {
        if (typeof user !== 'object') return {
            initials: '',
            name: user === 'error' ? "Couldn't Load User" : user === 'loading' ? 'Loading...' : ''
        };
        const { name } = user;
        if (typeof name === 'string') {
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
    const bgColor = typeof user === 'object' && user.backgroundColor;
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
        <AvatarInner user={typeof user === 'object' ? {...user, name, initials} : user} size={p.size} />
    </div>;
};

const AvatarInner = ({ user, size }: { size: Size; user: 'loading' | 'error' | AvatarUser & { initials: string; name: string }}) => {
    if (user === 'loading') return <Spinner size='auto' type='pulse' />;

    if (user === 'error') return <img src={errSvg} className='rounded-full h-full w-full' />;

    const { initials, imgSrc, status } = user;
    const [imgStatus, setImgStatus] = useState<'loading' | 'error' | 'success'>(imgSrc ? 'loading' : 'error');
    return <>
        {/* Badge */}
        {/* <div className="bg-green-500 rounded-full w-2 h-2 absolute top-0 right-0"></div> */}
        
        {/* User image */}
        {imgStatus === 'error' ? 
            initials
            :
            <img
                className="rounded-full h-full w-full"
                src={user.imgSrc}
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
    // <div className={`rounded-full absolute bottom-0 right-0 ${statusSize[p.size]} ${statusColor[p.status]}`}></div>;


// const AvatarOld1 = (p: AvatarProps) =>
//     <figure
//         className={`avatar avatar-${p.size} ${p.badge ? ' badge' : ''} ${(p.onClick) ? 'clickable' : '' }`}
//         data-initial={p.img.initials}
//         data-badge={(isType(p.badge, 'number') && p.badge) || undefined}
//         style={{ backgroundColor: p.img.backgroundColor, ...(p.style || {}) }}
//         onClick={p.onClick}
//     >
//         {p.img.src && <img src={p.img.src}/>}
//         {p.status && <i className={`avatar-presence ${p.status}`} />}
//     </figure>;

// create a loading state for avatars
export const AvatarOld2 = (_p: { x: string }) =>  <>

<div className="flex justify-center">
    <div className="flex relative w-12 h-12 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">U </div>
    <div className="flex relative w-12 h-12 bg-green-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">F </div>
    <div className="flex relative w-12 h-12 bg-purple-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">XY </div>
    <div className="flex relative w-12 h-12 bg-pink-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail w-8">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    </div>
</div>

<div className="flex justify-center mt-10">
    <div className="flex relative w-8 h-8 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg"/> </div>
    <div className="flex relative w-10 h-10 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg"/> </div>
    <div className="flex relative w-12 h-12 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg"/> </div>
    <div className="flex relative w-16 h-16 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg"/> </div>
    <div className="flex relative w-20 h-20 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg"/> </div>
</div>

<div className="flex justify-center mt-10">
    <div className="flex relative w-12 h-12 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg" />
        <div className="bg-green-500 rounded-full w-3 h-3 absolute bottom-0 right-0"></div>
    </div>
    <div className="flex relative w-12 h-12 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" />
        <div className="bg-red-500 rounded-full w-3 h-3 absolute bottom-0 right-0"></div>
    </div>
    <div className="flex relative w-12 h-12 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/75.jpg" />
        <div className="bg-orange-500 rounded-full w-3 h-3 absolute bottom-0 right-0"></div>
    </div>
</div>

<div className="flex flex-row-reverse justify-center mt-10">
    <div className="flex relative w-10 h-10 bg-gray-500 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white text-xl text-white">+5 </div>
    <div className="flex relative w-10 h-10 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
    <div className="flex relative w-10 h-10 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
    <div className="flex relative w-10 h-10 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
    <div className="flex relative w-10 h-10 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
    <div className="flex relative w-10 h-10 justify-center items-center m-1 mr-2 -ml-3 rounded-full border-r-2 border-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" /> </div>
</div>
</>