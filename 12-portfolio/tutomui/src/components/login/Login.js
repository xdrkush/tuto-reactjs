import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUx } from "../../store/actions/AuthActions";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault();
    // console.log("submit form login");

    if (name && password) {
      dispatch(loginUx({ name, password }));
      setName("");
      setPassword("");
      // setTimeout(() => navigate("/Admin"), 1200)
    }
  };

  return (
    <Box sx={{ width: "100vw", display: 'flex', flexDirection: 'column' }}>
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
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        margin="dense"
        id="password"
        label="Password"
        type="text"
        fullWidth
        variant="standard"
      />

      <Button sx={{ maxWidth: "250px" }} onClick={handleForm} variant="contained">Submit</Button>
    </Box>
  );
};

export default Login;
