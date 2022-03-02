import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListCard from "../components/category/ListCard";
import Searchbar from "../components/category/Searchbar";
import { Grid } from "@mui/material";

import { getCategory } from "../store/actions/CategoryActions";

const ArticlePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.listCategory);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    // console.log('search page', value)
    setSearch(value);
  };

  useEffect(() => {
    // console.log("effect getCategory");
    dispatch(getCategory());
  }, []);

  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={16}>
        <Searchbar handleSearch={handleSearch} />
      </Grid>
      <Grid item xs={16}>
        <ListCard list={categories} search={search} />
      </Grid>
    </Grid>
  );
};

export default ArticlePage;
