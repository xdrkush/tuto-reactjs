/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listUsers: [],
  user: {}
};

/*
 * Reducers
 * ******** */
export function UsersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_ALL_USERS:
      console.log('reducer users all', action.payload)
      return {
        ...state,
        flash: action.payload.message,
        listUsers: action.payload.dbUser,
      };
    case Actions.GET_ID_USERS:
      return {
        ...state,
        flash: action.payload.message,
        user: action.payload.user,
      };
    case Actions.POST_USERS:
      return {
        ...state,
        flash: action.payload.message,
        listUsers: action.payload.dbUser,
      };
    case Actions.EDIT_USERS:
      return {
        ...state,
        flash: action.payload.message,
        listUsers: action.payload.dbUser,
      };
    case Actions.DELETE_USERS:
      return {
        ...state,
        flash: action.payload.message,
        listUsers: action.payload.dbUser,
      };
  }
}

/*
 * Getters
 * ******* */
