import "./Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUx, checkUx } from "../../store/actions/LoginActions";
import { useNavigate } from "react-router";

const FormLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    console.log("submit form login");

    if (name && password) {
      await dispatch(loginUx({ name, password }));
      setName("");
      setPassword("");
      dispatch(checkUx());
      navigate('/Admin')
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FormLogin;
