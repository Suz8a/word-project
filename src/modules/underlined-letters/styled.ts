import styled from "styled-components";

type UnderlinedLettersContainerProps = {
  width: string;
  height: string;
};

export const UnderlinedLettersContainer = styled.div<UnderlinedLettersContainerProps>`
  ${({ width, height }) => "".concat(`width:${width};`, `height:${height};`)}
  display:flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;
