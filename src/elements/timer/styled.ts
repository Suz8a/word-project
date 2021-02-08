import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const rotate1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

const fill = keyframes`
  from {
    opacity: 1;
    transform: rotate(0deg)
  }
  to {
    transform: rotate(180deg);
    opacity: 1;
  }
`;

const fill1 = keyframes`
  0% {
    opacity: 1;
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(180deg);
    opacity: 1;
  }
`;

type AnimationProps = {
  seconds: number;
  toggle?: boolean;
};

type ContainerProps = {
  height: string;
  width: string;
  color?: string;
};

export const Container = styled.div<ContainerProps>`
  border-radius: 50%;
  ${({ height, width, color }) => {
    return "".concat(
      `height: ${height};`,
      `width: ${width};`,
      `background-color: ${color ? color : "black"};`
    );
  }}
  border: 5px solid black;
  overflow: hidden;
  position: relative;
`;

export const Filler = styled.div<AnimationProps>`
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transform-origin: right;
  animation: ${({ seconds, toggle }) =>
    toggle
      ? css`
          ${rotate} ${seconds}s linear forwards;
        `
      : css`
          ${rotate1} ${seconds}s linear forwards;
        `};
`;

export const LeftMask = styled.div`
  width: 50%;
  height: 100%;
  background-color: inherit;
  position: absolute;
  left: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const RightMask = styled.div<AnimationProps>`
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  transform-origin: left;

  animation: ${({ seconds, toggle }) =>
    toggle
      ? css`
          ${fill} ${seconds}s linear forwards;
        `
      : css`
          ${fill1} ${seconds}s linear forwards;
        `};
  animation-delay: ${({ seconds }) =>
    css`
      ${seconds}s
    `};
  opacity: 0;
`;
