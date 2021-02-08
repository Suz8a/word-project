import React from "react";
import { Container, Filler, LeftMask, RightMask } from "./styled";

type TimerProps = {
  height: string;
  width: string;
  seconds: number;
  color?: string;
  toggle?: boolean;
};

function Timer({ seconds, toggle, width, height, color }: TimerProps) {
  return (
    <Container width={width} height={height} color={color}>
      <Filler seconds={seconds / 2} toggle={toggle} />
      <LeftMask />
      <RightMask seconds={seconds / 2} toggle={toggle} />
    </Container>
  );
}

export default Timer;
