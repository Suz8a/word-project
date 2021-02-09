import React from "react";
import { TextContainer } from "./styled";

type TextProps = {
  text: string;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
};

function Text({ text, fontSize, color, fontWeight }: TextProps) {
  return (
    <TextContainer fontSize={fontSize} color={color} fontWeight={fontWeight}>
      {text}
    </TextContainer>
  );
}

export default Text;
