import React, { ReactNode } from "react";
import { ClickeableArea } from "./styled";

type ButtonProps = {
  width: string;
  height: string;
  onClick: () => void;
  backgroundColor?: string;
  children?: ReactNode;
  disabled?: boolean;
};

function Button({ width, height, children, disabled, onClick }: ButtonProps) {
  return (
    <ClickeableArea
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ClickeableArea>
  );
}

export default Button;
