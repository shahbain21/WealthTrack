// reducers/auth.js
import { CREATE_USER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../Actions/auth";

// Initial State
const initialState = {
  isAuthenticated: false,
  username: null,
  error: null,
  save: []
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        error: action.payload.error,
      };

    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        error: null,
      };

    case CREATE_USER:
      return {
        ...state,
        save: [...state.save, action.payload],
      };

    default:
      return state;
  }
};

export default authReducer;
