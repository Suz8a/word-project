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
      `font-size:${fontSize ? fontSize : `16pxpx`};`,
      `color:${color ? color : `black`};`,
      `font-weight:${fontWeight ? fontWeight : `normal`};`
    );
  }}
`;
