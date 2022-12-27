/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  user: {},
  flash: "",
  authenticate: false,
  isVerified: false,
  isAdmin: false,
};

/*
 * Reducers
 * ******** */
export function AuthReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.LOGIN_USER:
      return {
        ...state,
        user: action.payload.token,
        authenticate: action.payload.token.isVerified,
        isVerified: action.payload.token.isVerified,
        isAdmin: action.payload.token.isAdmin,
        flash: action.payload.flash,
      };
    case Actions.CHECK_AUTH:
      return {
        ...state,
        flash: action.payload.flash,
        user: action.payload.token,
        authenticate: action.payload.token.isVerified,
        isVerified: action.payload.token.isVerified,
        isAdmin: action.payload.token.isAdmin
      };
    case Actions.REGISTER_USER:
      return {
        ...state,
        flash: action.payload.flash
      };
  }
}

/*
 * Getters
 * ******* */
