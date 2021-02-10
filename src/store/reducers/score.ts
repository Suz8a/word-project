const scoreReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "ADD_LETTER_POINTS":
      return state + 5;

    case "ADD_WORD_POINTS":
      return state + 20;

    case "RESET":
      return (state = 0);
    default:
      return {};
  }
};

export default scoreReducer;
