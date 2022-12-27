import "./Login.css"; // same css for register & login
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUx } from "../../store/actions/LoginActions";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    console.log("submit form register");

    if (name && email && password === passwordConfirm) {
      await dispatch(registerUx({ name, email, password }));
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FormRegister;
