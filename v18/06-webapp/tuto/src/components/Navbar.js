import "./Navbar.css"

export default function Navbar(props) {
  const { list } = props;

  return (
    <div className="Navbar justify-between">

      <h2> <a href="/"> HOME </a> </h2>

      <ul className="flex">
        {list.length > 0 && list.map((itm, i) => {
          return <li key={ i } className="item-nav">
            <a href={ `/#/${ itm.name }` }> {itm.label} </a>
          </li>
        })}
      </ul>

    </div>
  );
}
