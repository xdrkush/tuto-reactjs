import React, { useEffect } from "react";
import withAdmin from "../../components/login/withAdmin";

import { Grid, Typography } from "@mui/material";

import TableArticle from "../../components/admin/Table";
import Create from "../../components/admin/Create";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/actions/ArticlesActions";

const AArticle = () => {
  const title = "articles";
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles.listArticles)
  const article = {
    title: "",
    description: "",
    subtitle: "",
    author_id: "61f990ef49947655edb59053",
    category_id: "",
  };

  useEffect(() => dispatch(getArticles()), [])

  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <Typography variant="h5">{title.toUpperCase()}</Typography>
      </Grid>
      <Grid item xs={16}>
        <Create data={article} str={title} />
      </Grid>
      <Grid item xs={16}>
        <TableArticle data={articles} str={title} />
      </Grid>
    </Grid>
  );
};

export default withAdmin(AArticle);
