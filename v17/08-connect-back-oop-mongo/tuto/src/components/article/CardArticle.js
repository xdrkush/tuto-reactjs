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
    <div className="card" key={item._id}>
      <img
        src="https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no"
        alt={item.title}
      ></img>

      <div className="card-body">
        <p> {item.title} </p>
        <p> {item.price} </p>
        <button onClick={() => toArticleID(item._id)}> View more </button>
      </div>
      
      <div className="row">
        <button onClick={() => handleDelete(item._id)}>delete</button>
        <button onClick={() => setEditToggle(!editToggle)}>edit</button>
      </div>
      
      {editToggle ? <EditArticle item={ item } toggler={ toggler } /> : <p>edit: false</p>}
    </div>
  );
};

export default CardArticle;
