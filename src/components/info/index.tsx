import React from "react";
import { InfoContainer } from "./styled";
import Text from "../../elements/text";

type InfoProps = {
  width: string;
  infoTitle: string;
  info: string;
  titleColor: string;
  infoColor: string;
  fontSize?: string;
};

function Info({
  width,
  infoTitle,
  info,
  titleColor,
  infoColor,
  fontSize,
}: InfoProps) {
  return (
    <InfoContainer width={width}>
      <Text
        text={infoTitle}
        color={titleColor}
        fontSize={fontSize}
        fontWeight="bold"
      />
      <Text
        text={info}
        color={infoColor}
        fontWeight="bold"
        fontSize={fontSize}
      />
    </InfoContainer>
  );
}

export default Info;
