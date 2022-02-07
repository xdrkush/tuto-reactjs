import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) navigate("/Category");
  }, [navigate, state]);

  console.log("state", state);

  return (
    <Box>
      <h2>CategoryIDPage</h2>
      <p> title: {state && state.category.name} </p>
      <p> price: {state && state.category.name} </p>
    </Box>
  );
};

export default CategoryIDPage;
