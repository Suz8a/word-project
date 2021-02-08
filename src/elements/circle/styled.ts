import styled from "styled-components";
import { colorPalette } from "../../theme";

type ColorCircleProps = {
  width: string;
  height: string;
  color?: string;
};

export const ColorCircle = styled.div<ColorCircleProps>`
  ${({ width, height, color }) => {
    return "".concat(
      `width:${width};`,
      `height:${height};`,
      color ? `color:${color};` : `color: ${colorPalette.primary};`
    );
  }}
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
