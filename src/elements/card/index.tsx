import React, { ReactNode } from "react";
import { Container } from "./styled";

type CardProps = {
  width: string;
  height: string;
  borderRadius?: string;
  padding?: string;
  children?: ReactNode;
  backgroundColor?: string;
};

function Card({
  width,
  height,
  borderRadius,
  children,
  padding,
  backgroundColor,
}: CardProps) {
  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
    >
      {children}
    </Container>
  );
}

export default Card;
