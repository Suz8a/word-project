import React from "react";
import { Container, Filler, LeftMask, RightMask } from "./styled";

type TimerProps = {
  seconds: number;
  color?: string;
};

function Timer({ seconds }: TimerProps) {
  return (
    <Container>
      <Filler seconds={seconds / 2} />
      <LeftMask />
      <RightMask seconds={seconds / 2} />
    </Container>
  );
}

export default Timer;
