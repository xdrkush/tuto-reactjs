import React from "react";
import withAdmin from "../../components/login/withAdmin";

import { Grid } from "@mui/material";

const AWebsite = () => {
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <h2>Admin Website</h2>
      </Grid>
    </Grid>
  );
};

export default withAdmin(AWebsite);
