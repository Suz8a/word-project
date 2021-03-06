import styled from "styled-components";

type ClickableAreaProps = {
  width: string;
  height: string;
  backgroundColor?: string;
  disabled?: boolean;
  flexDirection?: string;
  padding?: string;
  borderRadius?: string;
};

export const ClickableArea = styled.div<ClickableAreaProps>`
  ${({
    width,
    height,
    backgroundColor,
    flexDirection,
    padding,
    borderRadius,
  }) => {
    return "".concat(
      `width: ${width};`,
      `height: ${height};`,
      `background-color: ${backgroundColor ? backgroundColor : "lightblue"};`,
      `flex-direction: ${flexDirection ? flexDirection : "row"};`,
      `padding: ${padding ? padding : "10px"};`,
      `border-radius:${borderRadius ? borderRadius : ""};`
    );
  }}
  ${({ disabled }) =>
    disabled ? `pointer-events: none;filter: brightness(80%);` : ``}
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
    filter: brightness(90%);
  }
  @media (max-width: 900px) {
    border-radius: 5px;
  }
`;
