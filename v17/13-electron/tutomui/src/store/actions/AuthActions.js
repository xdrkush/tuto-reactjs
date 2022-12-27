/*
 * Import - Module
 * *************** */
import axios from "../../config/axios";
import jwt_decode from "jwt-decode";

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
      .post("/login", form)
      .then((res) => {
        let token = res.data.token;
        // Token JWT
        if (res.data.token) localStorage.setItem("user_token", token);

        res.data.token = jwt_decode(res.data.token);
        if (res.data.token.isVerified === true)
          localStorage.setItem("user_verified", token);
        if (res.data.token.isAdmin === true)
          localStorage.setItem("user_admin", token);

        console.log("res login", res.data, token);
        dispatch({ type: LOGIN_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Register User
export const registerUx = (form) => {
  return (dispatch) => {
    return axios
      .post("/register", form)
      .then((res) => {
        dispatch({ type: REGISTER_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// export const logout = () => {
//   localStorage.removeItem("user_token");
//   localStorage.removeItem("user_verified");
//   localStorage.removeItem("user_admin");
//   window.location.reload();
//   navigate("/Login");
// };

// Check user authenticate
export const checkUx = () => {
  return (dispatch) => {
    return axios
      .get(`/checkauth/${localStorage.getItem("user_token")}`)
      .then((res) => {
        // console.log("res checkux", res.data);
        let token = res.data.token;
        const tokenDecode = jwt_decode(token)

        if (tokenDecode.isVerified) {
          if (tokenDecode.isVerified === true)
            localStorage.setItem("user_verified", token);
          if (tokenDecode.isAdmin === true)
            localStorage.setItem("user_admin", token);

          res.data.token = tokenDecode

          dispatch({ type: CHECK_AUTH, payload: res.data });
        }
      })
      .catch((err) => console.log(err));
  };
};
