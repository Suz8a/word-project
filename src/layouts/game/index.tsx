import React, { ReactNode } from "react";
import GridItem from "../../elements/grid-item";
import { Container, GameContainer, GameGrid, TopBarContainer } from "./styled";

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
    <Container>
      <TopBarContainer>{topBar}</TopBarContainer>
      <GameContainer>
        <GameGrid>
          <GridItem gridArea="leftBar">{leftBar}</GridItem>
          <GridItem gridArea="noteDescription">{noteDescription}</GridItem>
          <GridItem gridArea="clock">{clock}</GridItem>
          <GridItem gridArea="timer">{timer}</GridItem>
          <GridItem gridArea="clueButton">{clueButton}</GridItem>
          <GridItem gridArea="nextButton">{nextButton}</GridItem>
          <GridItem gridArea="word">{word}</GridItem>
          <GridItem gridArea="keyboard">{keyboard}</GridItem>
          <GridItem gridArea="attempts">{attemptsLeft}</GridItem>
        </GameGrid>
      </GameContainer>
    </Container>
  );
}

export default Game;
