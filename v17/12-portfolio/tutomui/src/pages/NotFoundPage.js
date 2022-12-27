import React from "react";
import About from "../components/about/About";
import { Grid } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <h2>404 Not found</h2>
      </Grid>
      <Grid item xs={16}>
        <About/>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
