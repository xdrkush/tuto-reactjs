import './ListCountry.css'
import CardCountry from "./CardCountry";

export default function ListCountry(props) {
    const { list, rangeValue, selectedRadio } = props;

    return (
        <div className="ListCountry container">
            <h4> List Country </h4>
            <div className="row justify-around">

                {list.length > 0 && list
                    .filter((country) => country.region.includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .filter((country, index) => index < rangeValue).map((itm, i) => {
                        return <CardCountry key={i} item={itm} />
                    })}

            </div>
        </div>
    )
}