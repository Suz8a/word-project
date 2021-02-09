import styled from "styled-components";

type InfoContainerProps = {
  width: string;
};

export const InfoContainer = styled.div<InfoContainerProps>`
  ${({ width }) => ` width: ${width};`}
  display: flex;
  justify-content: space-between;
`;
