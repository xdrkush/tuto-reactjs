import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import MainLayout from "../layouts/MainLayout";
import ListCard from "../components/articles/ListCard";
import Searchbar from "../components/articles/Searchbar";
import { Grid } from "@mui/material";

import { getArticles } from "../store/actions/ArticlesActions"

const ArticlePage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("")
  const listArticles = useSelector(state => state.articles.listArticles)

  const handleSearch = (value) => {
    // console.log('search page', value)
    setSearch(value);
  };

  useEffect(() => {
    console.log('effect getArticles')
    dispatch(getArticles())
  }, [])

  return (
    <MainLayout>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={16}>
          <Searchbar handleSearch={handleSearch} />
        </Grid>
        <Grid item xs={16}>
          <ListCard list={listArticles} search={search}/>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default ArticlePage;
