import React from 'react';
import { BsFillAlarmFill, BsFillArchiveFill } from 'react-icons/bs';
import type { IconType } from 'react-icons';

export type SideBarProps = {
    /** Set NavBar to position fixed at top of screen. Default: `false` */
    fixed: boolean;
    /** Set the position of the sidebar */
    position: 'left' | 'right';
}


export const SideBar = (_p: SideBarProps) => <div className={`
    fixed top-0 left-0 h-screen
    w-16 m-0
    flex flex-col
    bg-gray-900 text-white shadow-lg
`}>
    <SideBarIcon icon={BsFillAlarmFill} />
    <SideBarIcon icon={BsFillArchiveFill} text="tooltip" />
</div>;

export const SideBarIcon = (p: { icon: IconType, text?: string }) => <div
    className='sidebar-icon group'
>
    {<p.icon />}

    {p.text ? <span className='sidebar-tooltip group-hover:scale-100'>{p.text}</span> : null}
</div>;
