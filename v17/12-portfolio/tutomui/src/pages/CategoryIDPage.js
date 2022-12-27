import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ListCard from "../components/articles/ListCard";
import Placeholder from "../assets/images/Placeholder.svg";

const CategoryIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const search = "";

  useEffect(() => {
    if (!state) navigate("/Category");
  }, [navigate, state]);

  console.log("state ici", state);

  return (
    <Box sx={{p:0, m:0}}>
      <CardMedia
        component="img"
        height="300"
        image={Placeholder}
        alt="green iguana"
      />
      <Box sx={{ width: "100vw", textAlign: "center", mt: 5 }}>
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
          {state && state.category.name}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#1CD6C1",
            height: "4px",
            my: "50px",
            m: "auto",
            width: "75px",
          }}
        />
        <Typography
          className="title_header"
          variant="body"
          sx={{
            zIndex: "5",
            my: 2,
            fontSize: "16px",
          }}
        >
          Découvrez toutes mes ressources libres.
        </Typography>
      </Box>
      <ListCard list={state.category.articles_id} search={search} />
      {/* <ListCard list={state.category.article_id} /> */}
    </Box>
  );
};

export default CategoryIDPage;
