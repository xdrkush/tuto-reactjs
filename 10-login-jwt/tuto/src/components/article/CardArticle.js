import React, { useState } from "react";
import EditArticle from "./EditArticle";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { deleteArticle } from "../../store/actions/ArticlesActions";

const CardArticle = (props) => {
  const { item } = props;
  const [editToggle, setEditToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    dispatch(deleteArticle(id));
  };

  const toArticleID = async (id) => {
    console.log('go to article id')
    navigate('/Article/' + id , { state: { id, item }});
  };
  
  const toggler = (bool) => setEditToggle(bool)

  return (
    <div className="card" key={item.id}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5337089.jpg&f=1&nofb=1"
        alt={item.title}
      ></img>

      <div className="card-body">
        <p> {item.title} </p>
        <p> {item.price} </p>
        <button onClick={() => toArticleID(item.id)}> View more </button>
      </div>
      
      <div className="row">
        <button onClick={() => handleDelete(item.id)}>delete</button>
        <button onClick={() => setEditToggle(!editToggle)}>edit</button>
      </div>
      
      {editToggle ? <EditArticle item={ item } toggler={ toggler } /> : <p>edit: false</p>}
    </div>
  );
};

export default CardArticle;
