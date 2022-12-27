import "./Card.css"

export default function Card(props) {
    const { item } = props;

    return (
        <div className="Card">
            <h2> { item.name } </h2>
            <p> {item.description} </p>
        </div>
    );
}
