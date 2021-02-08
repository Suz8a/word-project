import styled from "styled-components";

type ItemsContainerProps = {
  width?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  borderColor?: string;
};

export const ItemsContainer = styled.div<ItemsContainerProps>`
  ${({ width }) => (width ? `width:${width}` : `width: 100%`)}
  ${({ height }) => (height ? `height:${height}` : "")}
  ${({ alignItems }) => (alignItems ? `align-Items:${alignItems}` : ``)}
  ${({ justifyContent }) =>
    justifyContent
      ? `justify-content:${justifyContent}`
      : `justify-content: center`}
  border-radius: 5px;
  border: 1 solid
    ${({ borderColor }) => (borderColor ? `${borderColor}` : `#C4C4C4`)};
  padding: 5px;
  display: flex;
`;
