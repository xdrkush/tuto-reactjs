/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { ArticlesReducer } from "./reducers/ArticlesReducers";
import { UsersReducer } from "./reducers/UsersReducers";
import { CategoryReducer } from "./reducers/CategoryReducers";
import { AuthReducer } from "./reducers/AuthReducers";
import { GithubReducer } from "./reducers/GithubReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  articles: ArticlesReducer,
  category: CategoryReducer,
  users: UsersReducer,
  auth: AuthReducer,
  github: GithubReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
