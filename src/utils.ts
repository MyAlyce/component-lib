import { RefObject, useEffect } from "react";

export const cssSizeMap = {
    xs: 'h-6 w-6', sm: 'h-9 w-9', md: 'h-16 w-16', lg: 'h-32 w-32', xl: 'h-64 w-64', auto: 'h-full w-full'
} as const;

export function clickOutListener(ref: RefObject<any>, onClickOut: () => any) {
    useEffect(() => document.addEventListener("click", (event) =>
        ref.current && !ref.current.contains(event.target) && onClickOut()),
        [ref]
    );
}

// export const 