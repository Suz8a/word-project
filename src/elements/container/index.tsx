import React, { ReactNode } from "react";
import { ItemsContainer } from "./styled";

type ContainerProps = {
  width?: string;
  height?: string;
  borderColor?: string;
  className?: string;
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  children: ReactNode;
};

function Container({
  width,
  height,
  alignItems,
  justifyContent,
  children,
  borderColor,
  className,
}: ContainerProps) {
  return (
    <ItemsContainer
      className={className}
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
      borderColor={borderColor}
    >
      {children}
    </ItemsContainer>
  );
}

export default Container;
