import { SET_AUTHENTICATED, SET_USER, SET_UNAUTHENTICATED } from "../types";

const initialState = {
  token: null,
  authenticated: null,
  credentials: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        token: action.payload.token,
        authenticated: true,
      };
    case SET_USER:
      return { ...state, credentials: action.payload };
    case SET_UNAUTHENTICATED:
      return {
        ...initialState,
        authenticated: false,
      };
    default:
      return state;
  }
};
