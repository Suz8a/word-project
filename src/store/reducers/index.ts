import { addLetters, getClueIndex } from "../../utils";
import { letterGuessed } from "../actions";

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
  lettersKeyboard: { value: string; color: string; disabled: boolean }[];
  currentDescription: string;
};

const initialState: GameState = {
  attemps: 10,
  clues: 5,
  letters: 0,
  score: 0,
  skips: 5,
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
    case "REDUCE_CLUES":
      const newLettersKeyboard = [...state.lettersKeyboard];
      const clueIndex = getClueIndex(
        state.lettersKeyboard,
        state.currentWord.split("")
      );
      newLettersKeyboard[clueIndex] = {
        ...newLettersKeyboard[clueIndex],
        disabled: true,
      };
      return {
        ...state,
        clues: state.clues - 1,
        lettersKeyboard: newLettersKeyboard,
      };
    case "REDUCE_SKIPS":
      return {
        ...state,
        skips: state.skips - 1,
        currentWord: action.payload.currentWord,
        currentWordSplitted: action.payload.currentWord
          .split("")
          .map(() => undefined),
        lettersKeyboard: addLetters(action.payload.currentWord.split("")),
        currentDescription: action.payload.currentDescription,
      };
    default:
      return state;
  }
};
