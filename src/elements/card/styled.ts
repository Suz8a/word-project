import styled from "styled-components";

type ContainerProps = {
  width: string;
  height: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
};

export const Container = styled.div<ContainerProps>`
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 10px 0px #c3c3c3;
  position: relative;
  display: flex;

  ${({
    width,
    height,
    borderRadius,
    padding,
    backgroundColor,
    alignItems,
    justifyContent,
    flexDirection,
  }) => {
    return "".concat(
      `width:${width};`,
      `height:${height};`,
      `background-color:${backgroundColor ? backgroundColor : `white`};`,
      `border-radius:${borderRadius ? borderRadius : `30px`};`,
      `padding:${padding ? padding : `10px`};`,
      `align-items:${alignItems ? alignItems : ``};`,
      `justify-content:${justifyContent ? justifyContent : `center`};`,
      `flex-direction:${flexDirection ? flexDirection : `column`};`
    );
  }}
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;
