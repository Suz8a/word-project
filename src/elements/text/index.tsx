import React from "react";
import { TextContainer } from "./styled";

type TextProps = {
  text: string;
  fontSize?: string;
  color?: string;
};

function Text({ text, fontSize, color }: TextProps) {
  return (
    <TextContainer fontSize={fontSize} color={color}>
      {text}
    </TextContainer>
  );
}

export default Text;
