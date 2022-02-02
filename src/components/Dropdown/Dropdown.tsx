import { isType } from '@giveback007/util-lib';
import React, { MouseEventHandler } from 'react';

// TODO:
    // allow dropdown to be custom jsx

type DropdownProps = {
    header?: JSX.Element | string;

    items: DropdownItemProps[];
}

export function Dropdown({ header }: DropdownProps) {
    // hidden
    return <div className="bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
        {header && <div className="px-4 py-3">
            {isType(header, 'string') ? 
                <>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
                </>
                :
                {header}
            }
        </div>}
        <ul className="py-1" aria-labelledby="dropdown">
            <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
            </li>
            <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
            </li>
            <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
            </li>
            <li>
                <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
            </li>
        </ul>
    </div>;
}

// type MenuSubmenu = {
//     type: 'sub-menu';
//     title: string;
//     subMenu: DropdownItemProps[];
// };

type DropdownAction = {
    type: 'action';
    title: string;
    onClick: MouseEventHandler;
    /** "active" means the menu item is highlighted. */
    isActive?: boolean;
};

type DropdownSection = {
    type: 'section';
    title: string;
}

type DropdownBreak = {
    type: 'break';
}

type DropdownItemProps = DropdownAction | DropdownSection | DropdownBreak;
const DropdownItem = (_p: DropdownItemProps) => {
    return null;
};

DropdownItem;