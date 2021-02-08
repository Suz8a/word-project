import React, { ReactNode } from "react";
import { ItemsContainer } from "./styled";

type ContainerProps = {
  width?: string;
  height?: string;
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
}: ContainerProps) {
  return (
    <ItemsContainer
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </ItemsContainer>
  );
}

export default Container;
