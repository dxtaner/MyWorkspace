import * as actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: actionTypes.DECREASE_COUNTER,
  payload: 1,
});

export const increaseByTwoCounter = () => ({
  type: actionTypes.INCREASE_BY_TWO_COUNTER,
  payload: 2,
});

export const resetCounter = () => ({
  type: actionTypes.RESET_COUNTER,
});

export const multiplyCounter = (factor) => ({
  type: actionTypes.MULTIPLY_COUNTER,
  payload: factor,
});
