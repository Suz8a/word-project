import styled from "styled-components";

type TextContainerProps = {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
};

export const TextContainer = styled.div<TextContainerProps>`
  width: fit-content;

  ${({ fontSize, color, fontWeight }) => {
    return "".concat(
      fontSize ? `font-size:${fontSize};` : "font-size: 16px;",
      color ? `color:${color};` : `color:#000000;`,
      `font-weight:${fontWeight ? fontWeight : `normal`};`
    );
  }}
`;
