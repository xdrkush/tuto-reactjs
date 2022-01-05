import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editArticle } from "../../store/actions/ArticlesActions";

const EditArticle = (props) => {
  const { item, toggler } = props;
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      price: price,
      id: item.id,
    };

    dispatch(editArticle(editData));
    toggler(false)
    // setEditToggle(false);
  };

  return (
    <form onSubmit={(e) => handleEdit(e)}>
      <input
        type="text"
        placeholder="Titre de l'article"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Prix de l'article"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input type="submit" value="valider modification" />
    </form>
  );
};

export default EditArticle;
