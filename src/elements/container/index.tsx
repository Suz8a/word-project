import React, { ReactNode } from "react";
import { ItemsContainer } from "./styled";

type ContainerProps = {
  width?: string;
  height?: string;
  alignItems?: string;
  justifyItems?: string;
  children: ReactNode;
};

function Container({
  width,
  height,
  alignItems,
  justifyItems,
  children,
}: ContainerProps) {
  return (
    <ItemsContainer
      width={width}
      height={height}
      alignItems={alignItems}
      justifyContent={justifyItems}
    >
      {children}
    </ItemsContainer>
  );
}

export default Container;
