/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_REPOS_DATA, GET_REPO_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get Countries
export const getRepos = () => {
  return (dispatch) => {
    return axios
      .get("https://api.github.com/users/xdrkush/repos")
      .then((res) => {
        // console.log("github res", res.data);
        dispatch({ type: GET_REPOS_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Get Repo
export const getRepo = (data) => {
  console.log("get repo 1", data, data.owner.login, data.name)
  return (dispatch) => {
    console.log("get repo 2")
    // return axios
    //   .get({
    //     url: `https://raw.githubusercontent.com/${data.owner.login}/${data.name}/main/README.md`,
    //     method: "GET",
    //     responseType: "blob",
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //     console.log("github repo res2", res.data);
    //     dispatch({ type: GET_REPO_DATA, payload: res.data });
    //   })
    //   .catch((err) => console.log(err));
  };
};
