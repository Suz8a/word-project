const lettersReducer = (state = 10, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "GET_LETTERS":
      return state;

    case "RESET":
      return (state = 10);
    default:
      return {};
  }
};

export default lettersReducer;
