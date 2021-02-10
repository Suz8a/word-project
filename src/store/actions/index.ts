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
export const letterGuessed = (index: number) => {
  return {
    type: "LETTER_GUESSED",
    payload: {
      index,
    },
  };
};

//CLUES ACTIONS
export const reduceClues = () => {
  return {
    type: "REDUCE_CLUES",
  };
};

//TIME
export const resetTime = () => {
  return {
    type: "RESET_TIME",
  };
};
