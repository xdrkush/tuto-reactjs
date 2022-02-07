/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
};

/*
 * Reducers
 * ******** */
export function ArticlesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_ARTICLE:
      return {
        ...state,
        flash: action.payload.flash,
      };
  }
}

/*
 * Getters
 * ******* */
