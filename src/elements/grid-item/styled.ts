import styled from "styled-components";

type GridItemContainerProps = {
  gridArea: string;
};

export const GridItemContainer = styled.div<GridItemContainerProps>`
  ${({ gridArea }) => `grid-area:${gridArea};`}
`;
