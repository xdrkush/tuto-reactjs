/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  listCategory: [],
  category: {}
};

/*
 * Reducers
 * ******** */
export function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_ALL_CATEGORY:
      return {
        ...state,
        flash: action.payload.message,
        listCategory: action.payload.dbCategory,
      };
    case Actions.GET_ID_CATEGORY:
      return {
        ...state,
        flash: action.payload.message,
        category: action.payload.category,
      };
    case Actions.POST_CATEGORY:
      return {
        ...state,
        flash: action.payload.message,
        listCategory: action.payload.dbCategory,
      };
    case Actions.EDIT_CATEGORY:
      return {
        ...state,
        flash: action.payload.message,
        listCategory: action.payload.dbCategory,
      };
    case Actions.DELETE_CATEGORY:
      return {
        ...state,
        flash: action.payload.message,
        listCategory: action.payload.dbCategory,
      };
  }
}

/*
 * Getters
 * ******* */
