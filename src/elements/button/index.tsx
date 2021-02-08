import React, { ReactNode } from "react";
import { ClickeableArea } from "./styled";

type ButtonProps = {
  width: string;
  height: string;
  onClick: () => void;
  backgroundColor?: string;
  children?: ReactNode;
};

function Button({ width, height, children, onClick }: ButtonProps) {
  return (
    <ClickeableArea width={width} height={height} onClick={onClick}>
      {children}
    </ClickeableArea>
  );
}

export default Button;
