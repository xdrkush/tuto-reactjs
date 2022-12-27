import "./FilterCountry.css"

export default function FilterCountry(props) {
    const { rangeValue, setRangeValue, selectedRadio, setSelectedRadio } = props
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <div className="FilterCountry container">
            <div className="bar row">
                {/* Slide input */}
                <div className="flex items-center justify-between w-25">
                    <input
                        className="w-75"
                        type="range"
                        min="1"
                        max="250"
                        value={rangeValue}
                        onChange={(e) => setRangeValue(e.target.value)}
                    />
                    <h4 className="w-25">{rangeValue}</h4>
                </div>

                <div className="flex items-center w-75">
                    {/* Radios input */}
                    <ul className={"flex justify-around w-75"}>
                        {radios.map((radio) => {
                            return (
                                <li key={radio}>
                                    <input
                                        type="radio"
                                        value={radio}
                                        id={radio}
                                        checked={radio === selectedRadio}
                                        onChange={(e) => setSelectedRadio(e.target.value)}
                                    />
                                    <label htmlFor={radio}>{radio}</label>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Button cancel */}
                    <div className={"cancel w-25"}>
                        {selectedRadio && (
                            <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}
