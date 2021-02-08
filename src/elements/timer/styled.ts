import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
`;

const fill = keyframes`
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
};

export const Container = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  border: 5px solid black;
  overflow: hidden;
  position: relative;
  background-color: white;
`;

export const Filler = styled.div<AnimationProps>`
  width: 50%;
  height: 100%;
  background-color: red;
  position: absolute;
  left: 0;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
  transform-origin: right;
  animation: ${({ seconds }) =>
    css`
      ${rotate} ${seconds}s linear forwards;
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
  background-color: red;
  position: absolute;
  right: 0;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  transform-origin: left;
  animation: ${({ seconds }) =>
    css`
      ${fill} ${seconds}s linear forwards;
    `};
  animation-delay: ${({ seconds }) =>
    css`
      ${seconds}s
    `};
  opacity: 0;
`;
