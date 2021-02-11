import styled from "styled-components";

type ContainerProps = {
  width: string;
  height: string;
  flexDirection?: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ width, height, flexDirection }) =>
    "".concat(
      `width: ${width};`,
      `height:${height};`,
      `flex-direction:${flexDirection ? flexDirection : "column"};`
    )}
  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;
