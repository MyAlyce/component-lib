import React from 'react';
import { CgSpinnerAlt, CgSpinnerTwoAlt, CgSpinnerTwo, CgSpinner } from 'react-icons/cg';
import { IconContext } from "react-icons";
import type { Size } from '..';

const svgs = [CgSpinnerAlt, CgSpinnerTwoAlt, CgSpinnerTwo, CgSpinner];
const sizeMap: { [K in Size]: number } = {
    xs: 8, sm: 12, md: 24, lg: 48, xl: 96
};

export type SpinnerProps = {
    /** If set to auto will automatically fill the available space */
    size?: Size | 'auto-width';
    type?: 1 | 2 | 3 | 4;
}

export function Spinner(p: SpinnerProps) {
    const { type = 4 } = p;
    const size = p.size && p.size !== 'auto-width' ? `${sizeMap[p.size] / 4}rem` : '100%';
    const SVG = svgs[type - 1];
    
    return <div className='content-center icon' style={{width: size, height: size}}>
        <IconContext.Provider value={{
            size: '100%',
            className: `animate-spin`,
            style: { backgroundSize: 'contain' }
            

        }}><SVG preserveAspectRatio="xMidYMid meet" /></IconContext.Provider>
    </div>;
}