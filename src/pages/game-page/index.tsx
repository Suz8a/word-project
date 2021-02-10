import React, { useEffect } from "react";
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
import { getWord } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { initGame } from "../../store/actions";
import { GameState } from "../../store/reducers";
import { addLetters } from "../../utils";

function GamePage() {
  const dispatch = useDispatch();
  const {
    attemps,
    time,
    letters,
    clues,
    currentDescription,
    currentWord,
    lettersKeyboard,
    currentWordSplitted,
    loading,
    score,
    skips,
    words,
  } = useSelector<GameState, GameState>((state) => state);

  useEffect(() => {
    getWord().then(({ definition, word }) =>
      dispatch(initGame(word, definition))
    );
  }, []);

  console.log(addLetters(["x", "z"]));

  const toggle = false;
  const letterKeyboard = ["a", "b", "c"];

  function onClueClick() {}
  function onNextClick() {}
  function onExitClick() {}

  if (loading) return <div>loading...</div>;

  return (
    <>
      <Game
        topBar={
          <TopBar
            backgroundColor={colorPalette.primary}
            height="100%"
            icon={<ImArrowLeft size="40px" color="white" />}
            text={`Guess the word`}
            fontSize="40px"
            textColor="white"
            onClick={onExitClick}
          />
        }
        word={
          <UnderlinedLetters
            height="100%"
            width="100%"
            letterBoxSize="60px"
            fontSize="25px"
            letters={currentWordSplitted}
            textColor={colorPalette.primary}
          />
        }
        attemptsLeft={
          <Info
            infoTitle="Attempts left:"
            titleColor={colorPalette.primary}
            info={attemps.toString()}
            infoColor={colorPalette.secondary}
            width="fit-content"
            fontSize="30px"
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
            infoTitle="Time left"
            titleColor={colorPalette.primary}
            info={""}
            infoColor={colorPalette.secondary}
            width="fit-content"
          />
        }
        clueButton={
          <NotificationButton
            backgroundColor="white"
            circleColor={colorPalette.primary}
            fontSize="30px"
            size="150px"
            text={clues.toString()}
            textColor="white"
            disabled={clues === 0}
            onClick={onClueClick}
          >
            <HiLightBulb size="100%" color={colorPalette.primary} />
          </NotificationButton>
        }
        nextButton={
          <NotificationButton
            backgroundColor="white"
            circleColor={colorPalette.primary}
            fontSize="30px"
            size="150px"
            text={skips.toString()}
            textColor="white"
            disabled={skips === 0}
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
            letters={lettersKeyboard}
            fontSize="20px"
          />
        }
        noteDescription={
          <TextNote
            height="100%"
            width="100%"
            text={currentDescription}
            fontSize="30px"
          />
        }
        leftBar={
          <ScorePanel
            score={score.toString()}
            words={words.toString()}
            letters={letters.toString()}
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
            content={letters.toString()}
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
