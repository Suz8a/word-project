const cluesReducer = (state = 10, action: any) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;

    case "GET_CLUES":
      return state;

    case "RESET":
      return (state = 10);
    default:
      return {};
  }
};

export default cluesReducer;
