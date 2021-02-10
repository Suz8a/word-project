import styled from "styled-components";

type GridItemContainerProps = {
  gridArea: string;
};

export const GridItemContainer = styled.div<GridItemContainerProps>`
  ${({ gridArea }) => `grid-area:${gridArea};`}
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
