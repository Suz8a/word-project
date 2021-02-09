import styled from "styled-components";

type PanelContainerProps = {
  flexDirection?: string;
};

export const PanelContainer = styled.div<PanelContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
  ${({ flexDirection }) =>
    `flex-direction:${flexDirection ? flexDirection : `column`}`}
`;
