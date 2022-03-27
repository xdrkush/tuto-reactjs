import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListCard from "../components/category/ListCard";
import Searchbar from "../components/category/Searchbar";
import { Box } from "@mui/system";

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
    <Box sx={{ p: 0, m: 0 }}>
      <Searchbar handleSearch={handleSearch} />
      <ListCard list={categories} search={search} />
    </Box>
  );
};

export default ArticlePage;
