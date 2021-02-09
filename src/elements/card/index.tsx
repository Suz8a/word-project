import React, { ReactNode } from "react";
import { Container } from "./styled";

type CardProps = {
  width: string;
  height: string;
  borderRadius?: string;
  padding?: string;
  children?: ReactNode;
  backgroundColor?: string;
  className?: string;
};

function Card({
  width,
  height,
  borderRadius,
  children,
  padding,
  backgroundColor,
  className,
}: CardProps) {
  return (
    <Container
      className={className}
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
