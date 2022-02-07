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
      <h2>ArticleIDPage</h2>
      <p> Name: {state && state.article.title} </p>
    </Box>
  );
};

export default ArticleIDPage;
