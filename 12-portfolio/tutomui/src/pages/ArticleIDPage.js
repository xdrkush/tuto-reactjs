import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Placeholder from "../assets/images/Placeholder.svg";
import Editor from "../components/admin/Editor"

const ArticleIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate(-1);
  }, [navigate, state]);

  // console.log("state", state);

  return (
    <Box>
      <CardMedia
        component="img"
        height="300"
        image={Placeholder}
        alt="green iguana"
      />
      <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
        <Typography
          className="title_header"
          variant="h4"
          sx={{
            color: "primary",
            my: 2,
            zIndex: "5",
            fontWeight: "bold",
            fontSize: "38px",
          }}
        >
          {state && state.article.title}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#1CD6C1",
            height: "4px",
            my: 5,
            m: "auto",
            width: "75px",
          }}
        />
        <Typography
          className="title_header"
          variant="h5"
          sx={{
            zIndex: "5",
            my: 2
          }}
        >
          {state && state.article.subtitle}
        </Typography>
      </Box>
      <Box sx={{ my: 5 }}>
        <Typography variant="body">
          {state && state.article.description}
        </Typography>
        <Editor/>
      </Box>
    </Box>
  );
};

export default ArticleIDPage;
