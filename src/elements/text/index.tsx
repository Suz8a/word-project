import React from "react";
import { TextContainer } from "./styled";

type TextProps = {
  text: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  className?: string;
  selectable?: boolean;
};

function Text({
  text,
  fontSize,
  color,
  fontWeight,
  className,
  selectable,
}: TextProps) {
  return (
    <TextContainer
      className={className}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      selectable={selectable}
    >
      {text}
    </TextContainer>
  );
}

export default Text;
