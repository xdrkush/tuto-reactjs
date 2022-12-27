/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_COUNTRIES_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get Countries
export const getCountries = () => {
  return (dispatch) => {
    return axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        dispatch({ type: GET_COUNTRIES_DATA, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};
