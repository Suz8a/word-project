const timeReducer = (state = 300, action: any) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;
    case "GET_TIME":
      return state;
    case "RESET":
      return (state = 300);
    default:
      return {};
  }
};

export default timeReducer;
