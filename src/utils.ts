import { RefObject, useEffect, useState } from "react";

export const cssSizeMap = {
    xs: 'h-6 w-6', sm: 'h-9 w-9', md: 'h-16 w-16', lg: 'h-32 w-32', xl: 'h-64 w-64', auto: 'h-full w-full'
} as const;

export function clickOutListener(ref: RefObject<any>, onClickOut: () => any) {
    useEffect(() => document.addEventListener("click", (event) =>
        ref.current && !ref.current.contains(event.target) && onClickOut()),
        [ref]
    );
}

export const useRefDimensions = (ref: RefObject<HTMLElement>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
          const boundingRect = ref.current.getBoundingClientRect();
          const { width, height } = boundingRect;
          
        //   if (width !== dimensions.width || height !== dimensions.height)
            setDimensions({ width, height });
        }
    }, [ref.current?.offsetHeight, ref.current?.offsetWidth]);

    return dimensions;
};

export const gradientFrom = {

};

export const gradientTo = {
    
};

// export const 

// [
//     "red-400",
//     "red-400-accent",
//     "pink-400",
//     "pink-400-accent",
//     "purple-400",
//     "purple-400-accent",
//     "deep-purple-400",
//     "deep-purple-400-accent",
//     "indigo-400",
//     "indigo-400-accent",
//     "blue-400",
//     "blue-400-accent",
//     "light-blue-400",
//     "light-blue-400-accent",
//     "cyan-400",
//     "cyan-400-accent",
//     "teal-400",
//     "teal-400-accent",
//     "green-400",
//     "green-400-accent",
//     "light-green-400",
//     "light-green-400-accent",
//     "lime-400",
//     "lime-400-accent",
//     "yellow-400",
//     "yellow-400-accent",
//     "amber-400",
//     "amber-400-accent",
//     "orange-400",
//     "orange-400-accent",
//     "deep-orange-400",
//     "deep-orange-400-accent",
//     "brown-400",
//     "grey-400",
//     "blue-grey-400"
// ]