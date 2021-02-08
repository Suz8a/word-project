import styled from "styled-components";

type CustomLineProps = {
  width: string;
  height?: string;
  color?: string;
};

export const CustomLine = styled.div<CustomLineProps>`
  border-radius: 50px;
  ${({ width, height, color }) => {
    return "".concat(
      `width:${width};`,
      height ? `height:${height};` : `height: 8px;`,
      color ? `background-color:${color};` : `background-color: #000000;`
    );
  }}
`;
