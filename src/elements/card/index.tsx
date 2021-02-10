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
  alignItems?: "stretch" | "center" | "start" | "end";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
};

function Card({
  width,
  height,
  borderRadius,
  children,
  padding,
  backgroundColor,
  className,
  flexDirection,
  alignItems,
  justifyContent,
}: CardProps) {
  return (
    <Container
      alignItems={alignItems}
      justifyContent={justifyContent}
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
      backgroundColor={backgroundColor}
      flexDirection={flexDirection}
    >
      {children}
    </Container>
  );
}

export default Card;
