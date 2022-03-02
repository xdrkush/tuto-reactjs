import React, { useEffect } from "react";
import withAdmin from "../../components/login/withAdmin";

import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions/CategoryActions";
import { Grid, Typography } from "@mui/material";

import TableCategory from "../../components/admin/Table";
import Create from "../../components/admin/Create";

const ACategory = () => {
  const dispatch = useDispatch()
  const title = "category";
  const category = useSelector(state => state.category.listCategory)
  const data = { name: "name", icon: "<icon>" };
  
  useEffect(() => {
    dispatch(getCategory())
  }, [])

  // console.log('category', category)
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <Typography variant="h5">{title.toUpperCase()}</Typography>
      </Grid>
      <Grid item xs={16}>
        <Create data={data} str={title} />
      </Grid>
      <Grid item xs={16}>
        <TableCategory data={category} str={title} />
      </Grid>
    </Grid>
  );
};

export default withAdmin(ACategory);
