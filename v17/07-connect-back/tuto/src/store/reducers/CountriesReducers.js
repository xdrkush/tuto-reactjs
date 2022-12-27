/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  data: []
};

/*
 * Reducers
 * ******** */
export function CountriesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_COUNTRIES_DATA:
      return { data: action.payload };
  }
}

/*
 * Getters
 * ******* */
