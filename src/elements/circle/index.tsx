import React, { ReactNode } from "react";
import { ColorCircle } from "./styled";

type CircleProps = {
  size: string;
  color?: string;
  children?: ReactNode;
  className?: string;
};

function Circle({ size, color, children, className }: CircleProps) {
  return (
    <ColorCircle className={className} width={size} height={size} color={color}>
      {children}
    </ColorCircle>
  );
}

export default Circle;
