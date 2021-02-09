import styled from "styled-components";

type TextLineContainerProps = {
  width: string;
  height: string;
};

export const TextLineContainer = styled.div<TextLineContainerProps>`
  ${({ width, height }) => "".concat(`width:${width};`, `height:${height};`)}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  background-color: red;
  padding: 10px;
`;
