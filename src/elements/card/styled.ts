import styled from "styled-components";

type ContainerProps = {
  width: string;
  height: string;
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
};

export const Container = styled.div<ContainerProps>`
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 20px 5px #b7b7b7;
  position: relative;
  ${({ width, height, borderRadius, padding, backgroundColor }) => {
    return "".concat(
      `width:${width};`,
      `height:${height};`,
      `background-color:${backgroundColor ? backgroundColor : `white`};`,
      `border-radius:${borderRadius ? borderRadius : `30px`};`,
      `padding:${padding ? padding : `10px`};`
    );
  }}
`;
