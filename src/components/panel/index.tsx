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
};

function Panel({
  title,
  content,
  titleColor,
  contentColor,
  containerHeight,
}: PanelProps) {
  return (
    <PanelContainer>
      <Text text={title} color={titleColor} fontWeight="bold" />
      <Container width="100%" height={containerHeight}>
        <Text text={content} color={contentColor} fontWeight="bold" />
      </Container>
    </PanelContainer>
  );
}

export default Panel;
