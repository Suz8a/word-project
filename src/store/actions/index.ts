export const initGame = (currentWord: string, currentDescription: string) => {
  return {
    type: "INIT_GAME",
    payload: {
      currentWord,
      currentDescription,
    },
  };
};

//SKIP ACTIONS
export const reduceSkips = (
  currentWord: string,
  currentDescription: string
) => {
  return {
    type: "REDUCE_SKIPS",
    payload: {
      currentWord,
      currentDescription,
    },
  };
};

//SCORE ACTIONS
export const letterGuessed = (indexes: number[], letter: string) => {
  return {
    type: "LETTER_GUESSED",
    payload: {
      indexes,
      letter,
    },
  };
};

export const letterGuessedFailed = (index: number) => {
  return {
    type: "LETTER_GUESSED_FAILED",
    payload: {
      index,
    },
  };
};

export const wordGuessed = (
  timer: number,
  toggle: boolean,
  currentWord: string,
  currentDescription: string
) => {
  return {
    type: "WORD_GUESSED",
    payload: {
      timer,
      toggle,
      currentWord,
      currentDescription,
    },
  };
};

//CLUES ACTIONS
export const reduceClues = () => {
  return {
    type: "REDUCE_CLUES",
  };
};

//TIMER
export const reduceTimer = () => {
  return {
    type: "REDUCE_TIMER",
  };
};
