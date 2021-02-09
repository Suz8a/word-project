import React from "react";
import Text from "../../elements/text";
import Line from "../../elements/line";
import { TextContainer, TextLineContainer } from "./styled";

type UnderlinedTextProps = {
  width: string;
  height: string;
  fontSize: string;
  textColor: string;
  text?: string;
  selectable?: boolean;
};

function UnderlinedText({
  width,
  height,
  text,
  fontSize,
  textColor,
  selectable,
}: UnderlinedTextProps) {
  return (
    <TextLineContainer width={width} height={height}>
      <TextContainer>
        <Text
          text={text ? text : ""}
          fontSize={fontSize}
          fontWeight="bold"
          color={textColor}
          selectable={selectable}
        />
      </TextContainer>
      <Line width={"100%"} />
    </TextLineContainer>
  );
}

export default UnderlinedText;
