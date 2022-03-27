import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUx } from "../../store/actions/AuthActions";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();

    // console.log("submit form register");

    if (name && email && password === passwordConfirm) {
      await dispatch(registerUx({ name, email, password }));
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    }
  };

  return (
    <Box sx={{ width: "100vw", display: "flex", flexDirection: "column" }}>
      <TextField
        style={{ maxWidth: "250px" }}
        onChange={(e) => setName(e.target.value)}
        autoFocus
        margin="dense"
        id="name"
        label="Name"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        style={{ maxWidth: "250px" }}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        margin="dense"
        id="email"
        label="Email"
        type="email"
        fullWidth
        variant="standard"
      />
      <TextField
        style={{ maxWidth: "250px" }}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        margin="dense"
        id="password"
        label="Password"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        style={{ maxWidth: "250px" }}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        autoFocus
        margin="dense"
        id="password"
        label="Password"
        type="text"
        fullWidth
        variant="standard"
      />

      <Button
        sx={{ maxWidth: "250px" }}
        onClick={handleForm}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormRegister;
