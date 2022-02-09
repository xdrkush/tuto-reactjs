/*
 * Import - Module
 * *************** */
import axios from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_CATEGORY, GET_ALL_CATEGORY, GET_ID_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll category
export const getCategory = (data) => {
  return (dispatch) => {
    console.log('reducers get category')
    return axios.get("/category")
      .then((res) => {
        console.log('getcategory', res.data)
        dispatch({ type: GET_ALL_CATEGORY, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// getID category
export const getCategoryID = (id) => {
  return (dispatch) => {
    console.log('reducers get category')
    return axios.get(`/category/${ id }`)
      .then((res) => {
        console.log('getcategoryID', res.data)
        dispatch({ type: GET_ID_CATEGORY, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Create category
export const createCategory = (data) => {
  return (dispatch) => {
    return axios.post("/category", data)
      .then((res) => {
        dispatch({ type: POST_CATEGORY, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Delete category
export const deleteCategory = (id) => {
  return (dispatch) => {
    return axios.delete(`/category/${ id }`)
      .then((res) => {
        dispatch({ type: DELETE_CATEGORY, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Edit category
export const editCategory = (data) => {
  return (dispatch) => {
    return axios.put(`/category/${ data._id }`, data)
      .then((res) => {
        dispatch({ type: EDIT_CATEGORY, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};
