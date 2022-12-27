/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { LOGIN_USER, REGISTER_USER, CHECK_AUTH } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Login User
export const loginUx = (form) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3030/api/login", form)
      .then((res) => {
        console.log("res login", res.data);
        // Token JWT
        if (res.data.token) localStorage.setItem("user_token", res.data.token);
        dispatch({ type: LOGIN_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Register User
export const registerUx = (form) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3030/api/register", form)
      .then((res) => {
        dispatch({ type: REGISTER_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Check user authenticate
export const checkUx = () => {
  console.log("checkUx");
  return (dispatch) => {
    return axios
      .get(
        `http://localhost:3030/api/auth/${localStorage.getItem("user_token")}`
      )
      .then((res) => {
        console.log("res checkux", res.data);
        if (res.data.user) {
          dispatch({ type: CHECK_AUTH, payload: res.data });
          if (res.data.user.isVerified === true)
            localStorage.setItem(
              "user_verified",
              localStorage.getItem("user_token")
            );
          if (res.data.user.isAdmin === true)
            localStorage.setItem(
              "user_admin",
              localStorage.getItem("user_token")
            );
        }
      })
      .catch((err) => console.log(err));
  };
};
