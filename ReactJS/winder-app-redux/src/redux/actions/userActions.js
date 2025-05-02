// userActions.js

import * as actionTypes from "./actionTypes";

// Kullanıcıyı kaydet
export const registerUser = (userData) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: actionTypes.REGISTER_USER,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Hata oluştu: " + error);
        throw error;
      });
  };
};

export const loginSuccess = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    payload: error,
  };
};

export const loginUser = (credentials) => {
  return (dispatch) => {
    const { email, password } = credentials;

    fetch("http://localhost:3000/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((usersData) => {
        let loggedInUser = null;
        for (const user of usersData) {
          if (user.username === email && user.password === password) {
            loggedInUser = {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            };
            break;
          }
        }

        if (loggedInUser) {
          dispatch(loginSuccess(loggedInUser));
          return loggedInUser;
        } else {
          dispatch(loginFailure("Kullanıcı adı veya şifre hatalı."));
        }
      })
      .catch((error) => {
        console.error("Verilere erişirken hata oluştu: ", error);
        dispatch(loginFailure("Verilere erişirken hata oluştu."));
      });
  };
};

// Kullanıcı çıkış yap
export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
  };
};
