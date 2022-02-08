import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArticleIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate(-1);
  }, [navigate, state]);

  console.log("state", state);

  return (
    <Box>
      <Typography variant="h2">{state && state.article.title}</Typography>
      <Typography variant="h3">{state && state.article.subtitle}</Typography>
      <Typography variant="body">
        {state && state.article.description}
      </Typography>
    </Box>
  );
};

export default ArticleIDPage;
