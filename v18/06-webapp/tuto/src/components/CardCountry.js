import './CardCountry.css'

export default function CardCountry(props) {
    const { item } = props;

    return (
        <div className="CardCountry col">
            <h4> {item.name.common} : {item.flag} </h4>
            <p> pop: {item.population} </p>
            <img className='img-rounded' src={item.flags.png} alt={item.name.common}/>
        </div>
    )
}