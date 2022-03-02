import React from "react";
import About from "../components/about/About";
import { Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <About/>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
