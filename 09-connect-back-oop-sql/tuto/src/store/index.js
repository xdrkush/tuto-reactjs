/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { CountriesReducer } from "./reducers/CountriesReducers";
import { ArticlesReducer } from "./reducers/ArticlesReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  countries: CountriesReducer,
  articles: ArticlesReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
