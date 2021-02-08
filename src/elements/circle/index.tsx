import React, { ReactNode } from "react";
import { ColorCircle } from "./styled";

type CircleProps = {
  width: string;
  height: string;
  color?: string;
  children?: ReactNode;
};

function Circle({ width, height, color, children }: CircleProps) {
  return (
    <ColorCircle width={width} height={height} color={color}>
      {children}
    </ColorCircle>
  );
}

export default Circle;
