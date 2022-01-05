import MainLayout from "../layouts/MainLayout";
import FormCreateArticle from "../components/article/CreateArticle";
import ListArticle from "../components/article/ListArticle";

import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";

import { getArticles } from "../store/actions/ArticlesActions"

const ArticlePage = () => {

  const dispatch = useDispatch();
  const listArticles = useSelector(state => state.articles.listArticles)

  useEffect(() => {
    console.log('effect getArticles')
    dispatch(getArticles())
  }, [])

  console.log('selectors article', listArticles)
  return (
    <MainLayout>
      <h2>ArticlePage</h2>
      <FormCreateArticle />
      <ListArticle list={ listArticles } />
    </MainLayout>
  );
};

export default ArticlePage;
