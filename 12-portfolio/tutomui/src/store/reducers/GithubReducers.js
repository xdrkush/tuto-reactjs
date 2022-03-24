/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  repos: [],
  repo: {},
};

/*
 * Reducers
 * ******** */
export function GithubReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_REPOS_DATA:
      return { repos: action.payload };
    case Actions.GET_REPO_DATA:
      return { repo: action.payload };
  }
}

/*
 * Getters
 * ******* */
