import { isType } from '@giveback007/util-lib';
import classNames from 'classnames';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

// TODO:
    // allow dropdown to be custom jsx

type DropdownProps = {
    header?: JSX.Element | string;

    items: DropdownItemProps[];

    /** Toggles show/hide dropdown. If this is not used it will toggle using css */
    show?: boolean | undefined;

    /** Toggle item borders. If using type: `'break'` wont be rendered. */
    itemBorders?: boolean;
}

export function Dropdown({ header, items, show, children, itemBorders }: PropsWithChildren<DropdownProps>) {
    
    const renderItems = itemBorders ? items.filter(x => x.type !== 'break') : items;
    return <div className='dropdown inline-block relative'>
        {children}
        <div className={classNames(
            "animate-slide-down absolute min-w-32 bg-white text-base list-none divide-gray-100 rounded-sm shadow-md",
            isType(show, 'boolean') ? (!show && 'hidden') : 'hidden dropdown-menu',
        )}>
            {header && <div className="px-2 py-1.5">
                {isType(header, 'string') ? 
                    <span className="block text-center text-gray-600">{header}</span>
                    :
                    header
                }
            </div>}
            <ul className="py-1" aria-labelledby="dropdown">
                {renderItems.map((item, i, { length }) => <DropdownItem {...item} border={itemBorders} isLast={i === length - 1} />)}
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
    
    const br = !p.isLast && p.border && 'border-b border-secondary-200';
    // const lastCss = p.isLast && 'pb-0';
    // const liA = 'block px-4 py-1.5';
    switch (p.type) {
        case 'action':
            return <li className={classNames(br)}>
                <a
                    className='text-sm hover:bg-gray-100 text-gray-700 cursor-pointer block px-4 py-1.5'
                    onClick={p.onClick}
                >{p.title}</a>
            </li>;
        case 'break':
            return <hr className="my-1 dark:border-gray-600" />;
        case 'section':
            return <li className={classNames('text-gray-600 text-center block py-1', br)}>
                <span className="text-xs">{p.title}</span>
            </li>;
        case 'jsx':
            return <li className={classNames(br)}>p.element</li>;
        default:
            console.error(p);
            throw new Error('This type of MenuItem is not implemented.');
    }
};
