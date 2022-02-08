import React from "react";
import MyProject from '../components/project/MyProject'
import { Grid } from "@mui/material";

const ProjectPage = () => {
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <h2>Project</h2>
      </Grid>
      <Grid item xs={16}>
        <MyProject />
      </Grid>
    </Grid>
  );
};

export default ProjectPage;
