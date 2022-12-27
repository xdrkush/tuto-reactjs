import "./ListArticle.css";
import CardArticle from "./CardArticle"

const ListArticle = (props) => {
  const { list } = props;

  return (
    <div className="listCard">
      <h2>List Article</h2>
      <div className="row justify-content-around">
        {list.length > 0 && list.map((item) => {
          return (
            <CardArticle key={ item.id } item={ item } />
          );
        })}
      </div>
    </div>
  );
};

export default ListArticle;
