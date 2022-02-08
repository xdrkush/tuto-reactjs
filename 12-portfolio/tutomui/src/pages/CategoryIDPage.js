import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ListCard from "../components/articles/ListCard";

const CategoryIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const search = ""

  useEffect(() => {
    if (!state) navigate("/Category");
  }, [navigate, state]);

  console.log("state ici", state);

  return (
    <Box>
      <Typography variant="h2">{state && state.category.name}</Typography>
      <Typography variant="h3">{state && state.category.icon}</Typography>
      <ListCard list={state.category.articles_id} search={search} />
      {/* <ListCard list={state.category.article_id} /> */}
    </Box>
  );
};

export default CategoryIDPage;
