export const initGame = (currentWord: string, currentDescription: string) => {
  return {
    type: "INIT_GAME",
    payload: {
      currentWord,
      currentDescription,
    },
  };
};
