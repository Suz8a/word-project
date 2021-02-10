type GameState = {
  time: number;
  clues: number;
  skips: number;
  score: number;
  words: number;
  letters: number;
  attemps: number;
  currentWord: string;
  currentDescription: string;
};

export const storeReducer = (state: GameState, action: any): GameState => {
  switch (action.type) {
    case "INIT_GAME":
      return {
        attemps: 0,
        clues: 10,
        letters: 0,
        score: 0,
        skips: 10,
        time: 300,
        words: 0,
        currentWord: action.payload.currentWord,
        currentDescription: action.payload.currentDescription,
      };
    default:
      return state;
  }
};
