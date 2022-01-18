import React from 'react';

export interface ButtonProps {
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
