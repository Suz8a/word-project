import styled from "styled-components";
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
