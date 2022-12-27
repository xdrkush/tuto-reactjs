/*
 * Import - Module
 * *************** */
import axios from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_ALL_USERS, GET_ID_USERS, DELETE_USERS, EDIT_USERS } from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll users
export const getUsers = (data) => {
  return (dispatch) => {
    // console.log('reducers get category')
    return axios.get("/users")
      .then((res) => {
        console.log('getUsers', res.data)
        dispatch({ type: GET_ALL_USERS, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// getID users
export const getUserID = (id) => {
  return (dispatch) => {
    // console.log('reducers get category')
    return axios.get(`/users/${ id }`)
      .then((res) => {
        // console.log('getUserID', res.data)
        dispatch({ type: GET_ID_USERS, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Delete users
export const deleteUsers = (id) => {
  return (dispatch) => {
    return axios.delete(`/users/${ id }`)
      .then((res) => {
        dispatch({ type: DELETE_USERS, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Edit users
export const editUsers = (data) => {
  return (dispatch) => {
    console.log('editusers ACTION', data)
    return axios.put(`/users/${ data._id }`, data)
      .then((res) => {
        console.log('res edituser', res.data)
        dispatch({ type: EDIT_USERS, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};
