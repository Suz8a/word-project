import React, { ReactNode } from "react";

type GameProps = {
  topBar: ReactNode;
  leftBar: ReactNode;
  score: ReactNode;
  words: ReactNode;
  letters: ReactNode;
  clock: ReactNode;
  timer: ReactNode;
  clueButton: ReactNode;
  nextButton: ReactNode;
  noteDescription: ReactNode;
  word: ReactNode;
  keyboard: ReactNode;
  attemptsLeft: ReactNode;
};

function Game({
  topBar,
  leftBar,
  score,
  words,
  letters,
  clock,
  timer,
  clueButton,
  nextButton,
  noteDescription,
  word,
  keyboard,
  attemptsLeft,
}: GameProps) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Game;
