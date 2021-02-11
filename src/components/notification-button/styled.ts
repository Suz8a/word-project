import styled from "styled-components";
import Card from "../../elements/card";
import Circle from "../../elements/circle";

type StyledCircleProps = {
  backgroundColor: string;
};

export const StyledCircle = styled(Circle)<StyledCircleProps>`
  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
  position: absolute;
  top: -15%;
  right: -15%;
`;

export const StyledCard = styled(Card)`
  @media (max-width: 900px) {
    height: 60px;
    width: 60px;
  }
`;
