import styled from "styled-components";

type TextLineContainerProps = {
  width: string;
  height: string;
};

export const TextLineContainer = styled.div<TextLineContainerProps>`
  ${({ width, height }) => "".concat(`width:${width}`, `height:${height}`)}
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
