import React from "react";
import { Container, Filler, LeftMask, RightMask } from "./styled";

type TimerProps = {
  size: string;
  seconds: number;
  color?: string;
  toggle?: boolean;
};

function Timer({ seconds, toggle, size, color }: TimerProps) {
  return (
    <Container width={size} height={size} color={color}>
      <Filler seconds={seconds / 2} toggle={toggle} />
      <LeftMask />
      <RightMask seconds={seconds / 2} toggle={toggle} />
    </Container>
  );
}

export default Timer;
