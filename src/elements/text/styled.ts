import styled from "styled-components";

type TextContainerProps = {
  fontSize?: string;
  color?: string;
};

export const TextContainer = styled.div<TextContainerProps>`
  width: fit-content;
  ${({ fontSize, color }) => {
    return "".concat(
      fontSize ? `font-size:${fontSize};` : "font-size: 16px;",
      color ? `color:${color};` : `color:#000000;`
    );
  }}
`;
