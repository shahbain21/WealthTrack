// reducers/auth.js

// Initial State
const initialState = {
  isAuthenticated: false,
  username: null,
  error: null,
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        error: action.payload.error,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
