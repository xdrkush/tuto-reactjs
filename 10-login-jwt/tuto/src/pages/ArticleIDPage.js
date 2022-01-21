import MainLayout from "../layouts/MainLayout";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ArticleIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) navigate('/Article')
  }, [navigate, state])

  return (
    <MainLayout >
      <h2>ArticleIDPage</h2>
      <p> title: { state && state.item.title } </p>
      <p> price: { state && state.item.price } </p>
    </MainLayout>
  );
};

export default ArticleIDPage;
