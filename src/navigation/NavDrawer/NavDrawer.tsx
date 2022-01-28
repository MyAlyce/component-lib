import React, { MouseEventHandler, PropsWithChildren, RefObject, useEffect, useRef, useState } from 'react';
import { BsFillAlarmFill, BsFillArchiveFill } from 'react-icons/bs';
import type { IconType } from 'react-icons';
import classNames from 'classnames';
import { isType } from '@giveback007/util-lib';
import { Avatar } from '../../components/Avatar/Avatar';

// TODO:
  // use width & ellipsis (for too long items)
  // icon-mode (check tailwind media)
  // hidden-mode
  // brand always on top (only scroll menu items, including avatar)
  // handle not fixed (position)


export type NavDrawerProps = {
    /** Set NavBar to position fixed at the `left` or `right` of screen. Default: `"left"` */
    fixed?: 'left' | 'right' | false;

    zIndex?: number;

    // expanded: 
    brand?: JSX.Element | string

    user?: {
        imgSrc?: string;
        name: { first: string, last: string } | string;
        backgroundColor?: string;
    }

    /** Function to handle clicks on brand at the top of navbar */
    onBrandClick?: MouseEventHandler;

    /** Function to handle clicks on user avatar at the top of navbar */
    onAvatarClick?: MouseEventHandler;

    /** Define menu items */
    menuItems: (MenuSubmenu | MenuAction | MenuSection | MenuBreak)[];
}

export const NavDrawer = ({
    brand, fixed, zIndex = 100, user, onBrandClick, onAvatarClick, menuItems
}: NavDrawerProps) => <>{fixed && <Backdrop zIndex={zIndex - 1} />}<div
    className={classNames(`
        flex flex-col
        bg-white
        dark:bg-gray-800 dark:border-gray-600
        shadow
        text-secondary-600
        w-64
        
        scrollbar-thin scrollbar-track-secondary-200 scrollbar-thumb-secondary-400 scrollbar
    `, fixed && 'h-screen fixed top-0 ' + (fixed === 'left' ? 'left-0' : 'right-0'),)}
    style={{zIndex}}
    // overflow-y-auto overflow-x-hidden
    // scrollbar-thin scrollbar scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll
    >
    {brand && <div
        className={classNames('border-b border-secondary-200 px-2 py-1.5', onBrandClick && 'cursor-pointer')}
        onClick={onBrandClick}
    >
        {isType(brand, 'string') ? <h2
            className={classNames("text-3xl font-semibold text-gray-800 dark:text-white", fixed === 'right' && 'text-right')}
        >{brand}</h2> : {brand}}
    </div>}

    <div className="flex flex-col justify-between flex-1">
        <nav>
            {user && <div
                className={classNames("flex items-center border-b border-secondary-200 pl-1.5 py-2", onAvatarClick && 'cursor-pointer')}
                onClick={onAvatarClick}
            >
                <Avatar dataState='done' size='sm' {...user} />
                <h4 className="ml-1 font-medium text-gray-800 dark:text-gray-200 hover:underline ">
                    {user.name}
                </h4>
            </div>}
            {menuItems.map((item) => <MenuItem {...item}/>)}
        </nav>
    </div>
</div></>;

const Backdrop = ({ zIndex }: { zIndex: number }) => <div
    className={classNames('fixed top-0 left-0 right-0 w-screen h-screen opacity-50 bg-black')}
    style={{zIndex}}
></div>;

type MenuItem = {
    title: string;
    icon: JSX.Element;
}

type MenuSubmenu = {
    type: 'sub-menu';
    subMenu: MenuAction[];
} & MenuItem;

type MenuAction = {
    type: 'action';
    onClick: MouseEventHandler;
    /** "active" means the menu item is highlighted. */
    isActive?: boolean;
} & MenuItem;

type MenuSection = {
    type: 'section';
    title: string;
}

type MenuBreak = {
    type: 'break';
}

const MenuItemWrap = ({ children, isActive, getHeight, ...props }: PropsWithChildren<{
    onClick?: MouseEventHandler;
    isActive?: boolean;
    getHeight?: (height: number) => any;
    // ref?: RefObject<HTMLDivElement>
}>) => <div
    className={classNames(`
        flex items-center
        my-1 px-4 py-2 rounded-md
        text-gray-600 dark:text-gray-400
    `, 
    props.onClick && 'cursor-pointer',
    isActive ?
        'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
        :
        'hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200'
    )}
    {...props}
>
    {children}
</div>;

const MenuItem = (p: MenuSubmenu | MenuAction | MenuSection | MenuBreak) => {
    // let onClick: MouseEventHandler | undefined = undefined;
    return (() => {
        switch (p.type) {
            case 'action': {
                const { isActive, icon, title, onClick } = p;
                
                return <MenuItemWrap {...{ isActive, onClick }}>
                    {icon}
                    <span className="mx-4 font-medium">{title}</span>
                </MenuItemWrap>;
            }
            case 'break':
                return <hr className="my-1 dark:border-gray-600" />;
            case 'section':
                return <div className='
                    overflow-hidden my-1 py-2
                    text-gray-600 dark:text-gray-400
                '>
                    <span className="px-3 font-medium">{p.title}</span>
                </div>;
            case 'sub-menu': {
                const { icon, title } = p;
                const [isExpanded, setIsExpanded] = useState(false);

                return <>
                    <MenuItemWrap {...{ isActive: isExpanded, onClick: () => setIsExpanded(!isExpanded) }}>
                        {icon}
                        <span className="mx-4 font-medium">{title}</span>
                        <svg
                            className='svg-fix'
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
                    </MenuItemWrap>

                    {/* TODO: .head_arrow {svg { transform: rotate(180deg); }} */}
                    <div
                        className={classNames('overflow-hidden transition-all duration-700', isExpanded ? 'max-h-screen' : 'max-h-0')}
                    >
                        <p>show</p>
                        <p>show</p>
                        <p>show</p>
                        <p>show</p>
                        <p>show</p>
                        <p>show</p>
                        <p>show</p>
                    </div>
                </>;
            }
            default:
                return null;
        }
    })();
};

export const SideBar_OLD = ({ fixed, zIndex = 100 }: NavDrawerProps) => <>
    <aside className={classNames(`
        flex flex-col
        h-screen
        w-16 m-0
        bg-gray-900 text-white shadow-lg`,
        fixed && 'fixed top-0 ' + (fixed === 'left' ? 'left-0' : 'right-0'),
    )}
        style={{zIndex}}
    >
        <SideBarIcon icon={BsFillAlarmFill} />
        <SideBarIcon icon={BsFillArchiveFill} text="tooltip" />
    </aside>
</>;

const SideBarIcon = (p: { icon: IconType, text?: string }) => <div
    className='sidebar-icon group'
>
    {<p.icon />}
    {p.text ? <span className='sidebar-tooltip group-hover:scale-100'>{p.text}</span> : null}
</div>;