import React from "react";
import { PanelContainer } from "./styled";
import Text from "../../elements/text";
import Container from "../../elements/container";

type PanelProps = {
  title: string;
  content: string;
  titleColor: string;
  contentColor: string;
  containerHeight?: string;
  titleSize?: string;
  contentSize?: string;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
};

function Panel({
  title,
  content,
  titleColor,
  contentColor,
  containerHeight,
  flexDirection,
  titleSize,
  contentSize,
}: PanelProps) {
  return (
    <PanelContainer flexDirection={flexDirection}>
      <Text
        text={title}
        color={titleColor}
        fontWeight="bold"
        fontSize={titleSize}
      />
      <Container width="100%" height={containerHeight}>
        <Text
          text={content}
          color={contentColor}
          fontWeight="bold"
          fontSize={contentSize}
        />
      </Container>
    </PanelContainer>
  );
}

export default Panel;
