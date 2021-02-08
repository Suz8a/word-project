import React from "react";
import { Container, Filler, LeftMask, RightMask } from "./styled";

type TimerProps = {
  seconds: number;
  color?: string;
  toggle?: boolean;
};

function Timer({ seconds, toggle }: TimerProps) {
  return (
    <Container>
      <Filler seconds={seconds / 2} toggle={toggle} />
      <LeftMask />
      <RightMask seconds={seconds / 2} toggle={toggle} />
    </Container>
  );
}

export default Timer;
