import React from "react";
import { CustomLine } from "./styled";

type LineProps = {
  width: string;
  height?: string;
  color?: string;
  className?: string;
};

function Line({ width, height, color, className }: LineProps) {
  return (
    <CustomLine
      className={className}
      width={width}
      height={height}
      color={color}
    />
  );
}

export default Line;
