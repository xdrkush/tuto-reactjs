/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_REPOS_DATA, GET_README_DATA } from "./ActionTypes";

const userGH = {
  name: "xdrkush",
  branchDefault: 'main',
  file: 'README.md'
}

/*
 * Actions
 * ******* */

// Get Countries
export const getRepos = () => {
  return (dispatch) => {
    return axios
      .get(`https://api.github.com/users/${userGH.name}/repos`)
      .then((res) => {
        // console.log("github res", res.data);
        dispatch({ type: GET_REPOS_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Get Repo
export const getRepo = (data) => {
  console.log('get repo', data)
  return (dispatch) => {
    dispatch({ type: GET_README_DATA, payload: {} });
    return axios
      .get(`https://raw.githubusercontent.com/${userGH.name.toString()}/${data.name.toString()}/${userGH.branchDefault.toString()}/${userGH.file.toString()}`)
      .then((res) => {
        dispatch({ type: GET_README_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
