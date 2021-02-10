import styled from "styled-components";

type KeyboardContainerProps = {
  width: string;
  height: string;
};

export const KeyboardContainer = styled.div<KeyboardContainerProps>`
  ${({ width, height }) => "".concat(`width:${width};`, `height:${height};`)}
  display:flex;
  gap: 10px;
  padding: 20px 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
