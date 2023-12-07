// actions/auth.js

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const CREATE_USER = "CREATE_USER";

// Action Creators
export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: { username },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const logout = () => ({
  type: LOGOUT,
});

export const createUser = (userData) => {
  console.log("Creating user with data: ", userData);
  return {
    type: CREATE_USER,
    payload: userData,
  };
};