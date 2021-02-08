import styled from "styled-components";

type ClickeableAreaProps = {
  width: string;
  height: string;
  backgroundColor?: string;
};

export const ClickeableArea = styled.div<ClickeableAreaProps>`
  ${({ width, height, backgroundColor }) => {
    return "".concat(
      ` width: ${width};`,
      `height: ${height};`,
      `background-color: ${backgroundColor ? backgroundColor : "gray"};`
    );
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-position: center;
  transition: filter 0.2s;
  &:hover {
    cursor: pointer;
  }
  &:active {
    filter: brightness(80%);
  }
`;
