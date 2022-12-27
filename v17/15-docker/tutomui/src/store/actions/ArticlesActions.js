/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_ARTICLE, GET_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getArticles = (data) => {
  return (dispatch) => {
    console.log('reducers get article')
    return axios.get("http://localhost:7777/api/article")
      .then((res) => {
        console.log('getArticles', res.data)
        dispatch({ type: GET_ARTICLE, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// getID Article
export const getArticleID = (id) => {
  return (dispatch) => {
    console.log('reducers get article')
    return axios.get(`http://localhost:7777/api/article/${ id }`)
      .then((res) => {
        console.log('getArticleID', res.data)
        dispatch({ type: GET_ARTICLE, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Create Article
export const createArticle = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:7777/api/article", data)
      .then((res) => {
        dispatch({ type: POST_ARTICLE, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Delete Article
export const deleteArticle = (id) => {
  return (dispatch) => {
    return axios.delete(`http://localhost:7777/api/article/${ id }`)
      .then((res) => {
        dispatch({ type: DELETE_ARTICLE, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

// Edit Article
export const editArticle = (data) => {
  return (dispatch) => {
    return axios.put(`http://localhost:7777/api/article/${ data.id }`, data)
      .then((res) => {
        dispatch({ type: EDIT_ARTICLE, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};
