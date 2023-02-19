export default (state = { counter: { counter: 0 }, other: 1 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: { counter: state.counter.counter + 1 } };
    case "DECREMENT":
      return { ...state, counter: { counter: state.counter.counter - 1 } };
    case "UPDATE":
      return { ...state, counter: { counter: state.counter.counter } };
    default:
      return state;
  }
};
