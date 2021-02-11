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
  loading: boolean;
  loadingLottie: ReactNode;
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
  loading,
  loadingLottie,
}: GameProps) {
  return (
    <Container>
      <TopBarContainer>{topBar}</TopBarContainer>
      <GameContainer>
        <GameGrid>
          <GridItem gridArea="leftBar">{leftBar}</GridItem>
          <GridItem gridArea="clock">{clock}</GridItem>
          <GridItem gridArea="timer">{timer}</GridItem>
          <GridItem gridArea="clueButton">{clueButton}</GridItem>
          <GridItem gridArea="nextButton">{nextButton}</GridItem>
          {loading === false && (
            <GridItem gridArea="noteDescription">{noteDescription}</GridItem>
          )}
          {loading === false && <GridItem gridArea="word">{word}</GridItem>}
          {loading === false && (
            <GridItem gridArea="keyboard">{keyboard}</GridItem>
          )}
          {loading === true && (
            <GridItem gridArea="word">{loadingLottie}</GridItem>
          )}
          <GridItem gridArea="attempts">{attemptsLeft}</GridItem>
        </GameGrid>
      </GameContainer>
    </Container>
  );
}

export default Game;
