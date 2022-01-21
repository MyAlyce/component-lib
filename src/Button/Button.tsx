import React from 'react';
import type { Size } from '..';

export interface ButtonProps {
  size: Size,
  /** Default: 'regular' */
  // type?: 'regular' | 'flat',
  onClick?: () => void;
}

export const Button = ({
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type="button"
      className=''
      {...props}
    >
      {props.children} Stuff
    </button>
  );
};
