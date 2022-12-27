import "./Navbar.css"

import { Link } from "react-router-dom"

export default function Navbar(props) {
  const { list } = props;

  return (
    <div className="Navbar justify-between">

      <h2> <Link to="/"> HOME </Link> </h2>

      <ul className="flex">
        {list.length > 0 && list.map((itm, i) => {
          return <li key={i} className="item-nav">
            <Link to={`/${itm.name}`}> {itm.label} </Link>
          </li>
        })}
      </ul>

    </div>
  );
}
