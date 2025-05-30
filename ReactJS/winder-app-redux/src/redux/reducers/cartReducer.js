import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return { ...addedItem, quantity: addedItem.quantity + 1 };
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState2;
    case actionTypes.INCREMENT_QUANTITY:
      const incrementedState = state.map((cartItem) => {
        if (cartItem.product.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return incrementedState;
    case actionTypes.DECREMENT_QUANTITY:
      const decrementedState = state.map((cartItem) => {
        if (
          cartItem.product.id === action.payload.id &&
          cartItem.quantity > 1
        ) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      return decrementedState;
    default:
      return state;
  }
}
