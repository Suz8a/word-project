import React from "react";
import { CustomLine } from "./styled";

type LineProps = {
  width: string;
  height?: string;
  color?: string;
};

function Line({ width, height, color }: LineProps) {
  return <CustomLine width={width} height={height} color={color} />;
}

export default Line;
