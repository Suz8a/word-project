import styled from "styled-components";

type ItemsContainerProps = {
  width?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  borderColor?: string;
};

export const ItemsContainer = styled.div<ItemsContainerProps>`
  ${({ width, height, alignItems, justifyContent }) => {
    return "".concat(
      `width:${width ? width : `100%`};`,
      `height:${height ? height : ``};`,
      `align-Items:${alignItems ? alignItems : ``};`,
      `justify-content:${justifyContent ? justifyContent : `center`};`
    );
  }}
  border-radius: 5px;
  border: 1px solid
    ${({ borderColor }) => (borderColor ? `${borderColor}` : `#C4C4C4`)};
  padding: 5px;
  display: flex;
`;
