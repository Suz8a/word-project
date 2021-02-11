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
      `height:${height ? height : `8px`};`,
      `background-color:${color ? color : `black`};`
    );
  }}
  @media (max-width: 900px) {
    height: 3px;
  }
`;
