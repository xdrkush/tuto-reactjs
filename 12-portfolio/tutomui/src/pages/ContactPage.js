import React from "react";
import ContactMe from '../components/contact/ContactMe'
import { Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <h2>Contact</h2>
      </Grid>
      <Grid item xs={16}>
        <ContactMe />
      </Grid>
    </Grid>
  );
};

export default AboutPage;
