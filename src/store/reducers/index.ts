import { addLetters, getClueIndex } from "../../utils";

export type GameState = {
  time: number;
  timer: number;
  clues: number;
  skips: number;
  score: number;
  words: number;
  letters: number;
  attemps: number;
  loading: boolean;
  currentWord: string;
  currentWordSplitted: string[];
  lettersKeyboard: {
    value: string;
    color: string;
    disabled: boolean;
    fontColor: string;
  }[];
  currentDescription: string;
  toggle: boolean;
};

const initialState: GameState = {
  attemps: 10,
  clues: 5,
  letters: 0,
  score: 0,
  skips: 5,
  time: 300,
  timer: 300,
  words: 0,
  loading: true,
  currentWord: "",
  currentWordSplitted: [],
  lettersKeyboard: [],
  currentDescription: "",
  toggle: false,
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

    case "REDUCE_TIMER":
      return {
        ...state,
        timer: state.timer - 1,
      };

    case "LETTER_GUESSED":
      const newCurrentWordSplitted = [...state.currentWordSplitted];
      const newLettersKeyboardColor = [...state.lettersKeyboard];
      action.payload.indexes.forEach((index: number) => {
        newCurrentWordSplitted[index] = action.payload.letter;
      });
      newLettersKeyboardColor.forEach((item, index) => {
        if (item.value === action.payload.letter)
          newLettersKeyboardColor[index] = {
            ...item,
            disabled: true,
            color: "#00B8FD",
          };
      });
      return {
        ...state,
        currentWordSplitted: newCurrentWordSplitted,
        lettersKeyboard: newLettersKeyboardColor,
        letters: state.letters + 1,
        score: state.score + 5,
      };

    case "LETTER_GUESSED_FAILED":
      const disabledLetterKeyboard = [...state.lettersKeyboard];
      disabledLetterKeyboard[action.payload.index] = {
        ...disabledLetterKeyboard[action.payload.index],
        disabled: true,
      };
      return {
        ...state,
        lettersKeyboard: disabledLetterKeyboard,
        attemps: state.attemps - 1,
      };

    case "WORD_GUESSED":
      return {
        ...state,
        score: state.score + 20,
        words: state.words + 1,
        timer: action.payload.timer,
        toggle: action.payload.toggle,
        currentWord: action.payload.currentWord,
        currentWordSplitted: action.payload.currentWord
          .split("")
          .map(() => undefined),
        lettersKeyboard: addLetters(action.payload.currentWord.split("")),
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

    case "CHANGE_WORD":
      return {
        ...state,
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
