// userReducer.js
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
};

// Reducer fonksiyonu
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case actionTypes.REGISTER_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
