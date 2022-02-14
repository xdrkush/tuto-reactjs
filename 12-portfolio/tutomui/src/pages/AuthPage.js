import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import withAuth from '../components/login/withAuth';

const AuthPage = () => {
  const user = useSelector((state) => state.users);
  console.log('AuthPage', user)
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <h2>Autenticate page</h2>
      </Grid>
      <Grid item xs={16}>
        <p>Components</p>
      </Grid>
    </Grid>
  );
};

export default withAuth(AuthPage);
