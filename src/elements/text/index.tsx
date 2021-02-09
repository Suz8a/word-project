import React from "react";
import { TextContainer } from "./styled";

type TextProps = {
  text: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  className?: string;
};

function Text({ text, fontSize, color, fontWeight, className }: TextProps) {
  return (
    <TextContainer
      className={className}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
    >
      {text}
    </TextContainer>
  );
}

export default Text;
