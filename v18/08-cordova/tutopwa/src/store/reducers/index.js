import { combineReducers } from 'redux'
import CountryReducer from './CountryReducer'

const rootReducer = combineReducers({
  country: CountryReducer,
})

export default rootReducer