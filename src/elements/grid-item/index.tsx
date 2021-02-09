import React, { ReactNode } from "react";
import { GridItemContainer } from "./styled";

type GridItemProps = {
  gridArea: string;
  children: ReactNode;
};

function GridItem({ gridArea, children }: GridItemProps) {
  return <GridItemContainer gridArea={gridArea}>{children}</GridItemContainer>;
}

export default GridItem;
