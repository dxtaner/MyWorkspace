import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return { type: actionTypes.ADD_TO_CART, payload: cartItem };
}

export function removeFromCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}

export function incrementQuantity(product) {
  return { type: actionTypes.INCREMENT_QUANTITY, payload: product };
}

export function decrementQuantity(product) {
  return { type: actionTypes.DECREMENT_QUANTITY, payload: product };
}
