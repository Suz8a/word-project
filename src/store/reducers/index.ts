import { addLetters } from "../../utils";

export type GameState = {
  time: number;
  clues: number;
  skips: number;
  score: number;
  words: number;
  letters: 0;
  attemps: number;
  loading: boolean;
  currentWord: string;
  currentWordSplitted: string[];
  lettersKeyboard: string[];
  currentDescription: string;
};

const initialState: GameState = {
  attemps: 0,
  clues: 10,
  letters: 0,
  score: 0,
  skips: 10,
  time: 300,
  words: 0,
  loading: true,
  currentWord: "",
  currentWordSplitted: [],
  lettersKeyboard: [],
  currentDescription: "",
};

export const storeReducer = (
  state: GameState = initialState,
  action: any
): GameState => {
  switch (action.type) {
    case "INIT_GAME":
      const wordLetters = action.payload.currentWord.split("");
      return {
        ...state,
        loading: false,
        currentWord: action.payload.currentWord,
        currentWordSplitted: wordLetters.map(() => undefined),
        lettersKeyboard: addLetters(wordLetters),
        currentDescription: action.payload.currentDescription,
      };
    default:
      return state;
  }
};
