import styled from "styled-components";

type TextContainerProps = {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  selectable?: boolean;
};

export const TextContainer = styled.div<TextContainerProps>`
  width: fit-content;

  ${({ fontSize, color, fontWeight, selectable }) => {
    return "".concat(
      `font-size:${fontSize ? fontSize : `16px`};`,
      `color:${color ? color : `black`};`,
      `font-weight:${fontWeight ? fontWeight : `normal`};`,
      `user-select:${!selectable ? `none` : `auto`};`
    );
  }}
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;
