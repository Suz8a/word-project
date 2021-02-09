import React, { ReactNode } from "react";
import { ColorCircle } from "./styled";

type CircleProps = {
  width: string;
  height: string;
  color?: string;
  children?: ReactNode;
  className?: string;
};

function Circle({ width, height, color, children, className }: CircleProps) {
  return (
    <ColorCircle
      className={className}
      width={width}
      height={height}
      color={color}
    >
      {children}
    </ColorCircle>
  );
}

export default Circle;
