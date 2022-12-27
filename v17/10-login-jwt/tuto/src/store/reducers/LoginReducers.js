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
export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.LOGIN_USER:
      return {
        ...state,
        flash: action.payload.flash,
      };
    case Actions.CHECK_AUTH:
      return {
        ...state,
        flash: action.payload.flash,
        user: action.payload.user,
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
