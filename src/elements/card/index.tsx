import React, { ReactNode } from "react";
import { Container } from "./styled";

type CardProps = {
  width: string;
  height: string;
  borderRadius?: string;
  padding?: string;
  children?: ReactNode;
};

function Card({ width, height, borderRadius, children, padding }: CardProps) {
  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
    >
      {children}
    </Container>
  );
}

export default Card;
