import "./Navigation.css"

const Navigation = ( props ) => {
  const { title, link } = props

  return (
    <div className="navigation">
      <p> { title } </p>
      <ul className="row">
        {
          link.map(link => {
            return <li className="item-nav">
              <a href="/">
                { link }
              </a>
            </li>
          })
        }
        {/* <li className="item-nav">
          <a href="/">
            Item 1
          </a>
        </li>
        <li className="item-nav">
          <a href="/">
            Item 2
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navigation;
