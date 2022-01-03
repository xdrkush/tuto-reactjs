import "./CreateArticle.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle, getArticles } from "../../store/actions/ArticlesActions";

const FormCreateArticle = () => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch()

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
    e.preventDefault()

    console.log('submit form create article')

    if (title && price) {
      await dispatch(createArticle({ title, price }))
      setTitle("")
      setPrice("")
      dispatch(getArticles())
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={ (e) => handleForm(e)} >
        <input type="text" placeholder="Titre de l'article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" placeholder="Prix de l'article"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default FormCreateArticle;