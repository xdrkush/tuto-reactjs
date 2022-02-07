import React from "react";
import { Grid, Typography } from "@mui/material";
import TableUser from "../../components/admin/Table";

const AUser = () => {
  const title = "users";
  const users = [{ id: 1, name: "test 1", email: "test@test.test" }];
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <Typography variant="h5">{title.toUpperCase()}</Typography>
        <TableUser data={users} title={title} />
      </Grid>
    </Grid>
  );
};

export default AUser;
