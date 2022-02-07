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
import { CategoryReducer } from "./reducers/CategoryReducers";
import { LoginReducer } from "./reducers/LoginReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  articles: ArticlesReducer,
  category: CategoryReducer,
  login: LoginReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
