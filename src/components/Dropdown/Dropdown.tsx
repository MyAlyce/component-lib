import { isType } from '@giveback007/util-lib';
import classNames from 'classnames';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import type { ObjMap, Size } from '../..';

// TODO:
    // allow dropdown to be custom jsx

export type DropdownProps = {
    header?: JSX.Element | string;

    items: DropdownItemProps[];

    /** Toggles show/hide dropdown. If this is not used it will toggle using css */
    show?: boolean | undefined;

    /** Toggle item borders. If using type: `'break'` wont be rendered. */
    itemBorders?: boolean;

    size?: Size | 'auto';

    className?: string;
}

const dropdownSizeMap: ObjMap<Size | 'auto'> = { xs: 'w-30', sm: 'w-44', md: 'w-60', lg: 'w-80', xl: 'w-96', auto: 'w-full'};
export function Dropdown({ header, items, show, children, itemBorders, size = 'md', className }: PropsWithChildren<DropdownProps>) {
    
    const renderItems = itemBorders ? items.filter(x => x.type !== 'break') : items;
    return <div className='dropdown relative'>
        {children}
        <div className={classNames(
            "animate-slide-down absolute bg-white text-sm list-none divide-gray-100 rounded-sm shadow-md",
            isType(show, 'boolean') ? (!show && 'hidden') : 'hidden dropdown-menu',
            dropdownSizeMap[size],
            className
        )}>
            {header && <div className={classNames("cursor-default", itemBorders && 'border-b border-secondary-200')}>
                {isType(header, 'string') ? 
                    <span className="py-1.5 block text-center text-gray-500 text-base">{header}</span> : header}
            </div>}
            <ul>
                {renderItems.map((item, i, { length }) => <DropdownItem
                    {...item}
                    border={itemBorders}
                    isLast={i === length - 1}
                    key={i}
                />)}
            </ul>
        </div>
    </div>;
}

// TODO
// type MenuSubmenu = {
//     type: 'sub-menu';
//     title: string;
//     subMenu: DropdownItemProps[];
// };

type DropdownAction = {
    type: 'action';
    title: string;
    onClick: MouseEventHandler;
};

type DropdownSection = {
    type: 'section';
    title: string;
}

type DropdownBreak = {
    type: 'break';
}

type DropdownJSX = {
    type: 'jsx',
    element: JSX.Element;
}

type DropdownItemProps = DropdownAction | DropdownSection | DropdownBreak | DropdownJSX;
const DropdownItem = (p: DropdownItemProps & { border?: boolean; isLast: boolean; }) => {
    
    const br = classNames(!p.isLast && p.border && 'border-b border-secondary-200');
    switch (p.type) {
        case 'action':
            return <li className={br}>
                <a
                    className='hover:bg-gray-100 text-gray-700 cursor-pointer block px-4 py-1.5'
                    onClick={p.onClick}
                >{p.title}</a>
            </li>;
        case 'break':
            return <hr className="my-1 dark:border-gray-600" />;
        case 'section':
            return <li className={classNames('text-gray-600 text-center block py-1 cursor-default', br)}>
                <span className="text-xs">{p.title}</span>
            </li>;
        case 'jsx':
            return <li className={br}>{p.element}</li>;
        default:
            console.error(p);
            throw new Error('This type of MenuItem is not implemented.');
    }
};
