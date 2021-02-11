import React, { ReactNode } from "react";
import { Container } from "./styled";

type SimpleContainerProps = {
  width: string;
  height: string;
  children: ReactNode;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
};

function SimpleContainer({
  height,
  width,
  children,
  flexDirection,
}: SimpleContainerProps) {
  return (
    <Container width={width} height={height} flexDirection={flexDirection}>
      {children}
    </Container>
  );
}

export default SimpleContainer;
