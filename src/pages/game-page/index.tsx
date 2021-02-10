import React from "react";
import { colorPalette } from "../../theme";
import { HiLightBulb } from "react-icons/hi";
import { ImShuffle } from "react-icons/im";
import { ImArrowLeft } from "react-icons/im";
import Info from "../../components/info";
import Game from "../../layouts/game";
import Timer from "../../elements/timer";
import NotificationButton from "../../components/notification-button";
import Keyboard from "../../modules/key-board";
import TextNote from "../../components/text-note";
import ScorePanel from "../../modules/score-panel";
import Panel from "../../components/panel";
import TopBar from "../../components/top-bar";
import UnderlinedLetters from "../../modules/underlined-letters";

function GamePage() {
  var attemptsLeft = 10;
  var time = 100;
  var timeLeft = 30;
  var toggle = false;
  var cluesLeft = 10;
  var nextLeft = 10;
  var letters = [
    "A",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
  ];
  var wordDescription = "something";
  var score = 10;
  var words = 10;
  var lettersCounter = 10;
  var level = 1;
  var word = ["H", "O", "L", "I"];

  function onClueClick() {}
  function onNextClick() {}
  function onExitClick() {}

  return (
    <>
      <Game
        topBar={
          <TopBar
            backgroundColor={colorPalette.primary}
            height="100%"
            icon={<ImArrowLeft size="40px" color="white" />}
            text={`Level ${level}`}
            fontSize="40px"
            textColor="white"
            onClick={onExitClick}
          />
        }
        word={
          <UnderlinedLetters
            height="100%"
            width="100%"
            letterBoxSize="50px"
            letters={word}
            textColor={colorPalette.primary}
          />
        }
        attemptsLeft={
          <Info
            infoTitle="Attempts left:"
            titleColor={colorPalette.primary}
            info={attemptsLeft.toString()}
            infoColor={colorPalette.secondary}
            width="fit-content"
          />
        }
        clock={
          <Timer
            seconds={time}
            size={"150px"}
            color={colorPalette.primary}
            toggle={toggle}
          />
        }
        timer={
          <Info
            infoTitle="Time left:"
            titleColor={colorPalette.primary}
            info={timeLeft.toString()}
            infoColor={colorPalette.secondary}
            width="fit-content"
          />
        }
        clueButton={
          <NotificationButton
            backgroundColor="white"
            circleColor={colorPalette.primary}
            fontSize="100%"
            size="150px"
            text={cluesLeft.toString()}
            textColor="white"
            disabled={cluesLeft === 0}
            onClick={onClueClick}
          >
            <HiLightBulb size="100%" color={colorPalette.primary} />
          </NotificationButton>
        }
        nextButton={
          <NotificationButton
            backgroundColor="white"
            circleColor={colorPalette.primary}
            fontSize="100%"
            size="150px"
            text={nextLeft.toString()}
            textColor="white"
            disabled={nextLeft === 0}
            onClick={onNextClick}
          >
            <ImShuffle size="100%" color={colorPalette.primary} />
          </NotificationButton>
        }
        keyboard={
          <Keyboard
            buttonSize="60px"
            height="100%"
            width="100%"
            letters={letters}
            fontSize="20px"
          />
        }
        noteDescription={
          <TextNote height="100%" width="100%" text={wordDescription} />
        }
        leftBar={
          <ScorePanel
            score={score.toString()}
            words={words.toString()}
            letters={lettersCounter.toString()}
            titleSize="30px"
            contentSize="25px"
          />
        }
        score={
          <Panel
            title="Score"
            content={score.toString()}
            titleColor={colorPalette.primary}
            contentColor={colorPalette.secondary}
            flexDirection="row"
            titleSize="20px"
            contentSize="15px"
          />
        }
        words={
          <Panel
            title="Words"
            content={words.toString()}
            titleColor={colorPalette.primary}
            contentColor={colorPalette.secondary}
            flexDirection="row"
            titleSize="20px"
            contentSize="15px"
          />
        }
        letters={
          <Panel
            title="Letters"
            content={lettersCounter.toString()}
            titleColor={colorPalette.primary}
            contentColor={colorPalette.secondary}
            flexDirection="row"
            titleSize="20px"
            contentSize="15px"
          />
        }
      />
    </>
  );
}

export default GamePage;
