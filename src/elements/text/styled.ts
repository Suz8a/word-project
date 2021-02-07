import styled from "styled-components";
import { colorPalette } from "../../theme";

type TextContainerProps = {
  fontSize?: string;
  color?: string;
};

export const TextContainer = styled.div<TextContainerProps>`
  width: fit-content;
  ${({ fontSize }) => (fontSize ? `font-size:${fontSize}` : "font-size: 16px;")}
  ${({ color }) => (color ? `color:${color}` : `color:${colorPalette.primary}`)}
`;
