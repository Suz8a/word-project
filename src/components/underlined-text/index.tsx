import React from "react";
import Text from "../../elements/text";
import Line from "../../elements/line";
import { TextLineContainer } from "./styled";

type UnderlinedTextProps = {
  width: string;
  height: string;
  fontSize: string;
  textColor: string;
  text: string;
};

function UnderlinedText({
  width,
  height,
  text,
  fontSize,
  textColor,
}: UnderlinedTextProps) {
  return (
    <TextLineContainer width={width} height={height}>
      <Text
        text={text}
        fontSize={fontSize}
        fontWeight="bold"
        color={textColor}
      />
      <Line width={"100%"} />
    </TextLineContainer>
  );
}

export default UnderlinedText;
