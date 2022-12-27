import React from "react"

import MainLayout from "../layouts/MainLayout";
import ListCard from "../components/countries/ListCard";
import { Grid } from "@mui/material";

const CountriesPages = () => {

  return (
    <MainLayout>
      <Grid container columns={16}>
        <Grid item xs={16}>
          <ListCard />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default CountriesPages;
