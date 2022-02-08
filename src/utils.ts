import { RefObject, useEffect, useState } from "react";

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

export const loremIpsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;