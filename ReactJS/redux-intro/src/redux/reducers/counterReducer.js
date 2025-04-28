import * as actionTypes from "../actions/actionTypes";

const initialState = 10; // Initial state value

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return state + action.payload;

    case actionTypes.DECREASE_COUNTER:
      return state - action.payload;

    case actionTypes.INCREASE_BY_TWO_COUNTER:
      return state + action.payload;

    case actionTypes.RESET_COUNTER:
      return initialState; // Reset the counter to its initial state

    case actionTypes.MULTIPLY_COUNTER:
      return state * action.payload; // Multiply the counter by the payload (factor)

    default:
      return state;
  }
};

export default counterReducer;
