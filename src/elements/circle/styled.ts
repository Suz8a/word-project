import styled from "styled-components";

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
      color ? `color:${color};` : `color: #000000;`
    );
  }}
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
