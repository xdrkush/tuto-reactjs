import React from "react";
import ContactMe from '../components/contact/ContactMe'
import { Grid } from "@mui/material";

const ContactPage = () => {
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <ContactMe />
      </Grid>
    </Grid>
  );
};

export default ContactPage;
