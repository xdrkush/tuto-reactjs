import "./ListCard.css";

const ListCard = (props) => {
  const { list } = props;
  return (
    <div className="listCard">
      <h2>ListCard</h2>
      <div className="row">
        {list.map((item) => {
          return (
            <div className="card" key={ item.id }>
              <img src="https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no" alt={ item.title } ></img>
              <div className="card-body">
                <p> { item.title } </p>
                <p> { item.subtitle } </p>
              </div>
            </div>
          );
        })}

        {/* <div className="card">
            <img src="https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no" />
            <div className="card-body">
              <p>Titre</p>
              <p>Subtitle</p>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default ListCard;
