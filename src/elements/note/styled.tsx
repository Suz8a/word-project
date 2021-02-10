import styled from "styled-components";

type ContainerProps = {
  width: string;
  height: string;
};

export const NoteContainer = styled.div<ContainerProps>`
  ${({ width, height }) => {
    return "".concat(` width: ${width};`, `height: ${height};`);
  }}
  position: relative;
`;

export const NoteArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffeeaa;
  border: 1 solid #d1b644;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

export const Border = styled.div`
  width: 0;
  height: 0;
  border-right: 20px solid white;
  border-bottom: 20px solid #d1b644;
  border-bottom-left-radius: 5px;
  position: absolute;
  top: 0;
  right: 0;
`;
