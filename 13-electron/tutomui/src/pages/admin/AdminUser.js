import React, { useEffect } from "react";
import withAdmin from "../../components/login/withAdmin";

import { Grid, Typography } from "@mui/material";
import TableUser from "../../components/admin/Table";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/actions/UsersActions"

const AUser = () => {
  const title = "users";
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.listUsers);

  useEffect(() => dispatch(getUsers()), [])

  // console.log('users', users)

  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <Typography variant="h5">{title.toUpperCase()}</Typography>
        <TableUser data={users} str={title} />
      </Grid>
    </Grid>
  );
};

export default withAdmin(AUser);
