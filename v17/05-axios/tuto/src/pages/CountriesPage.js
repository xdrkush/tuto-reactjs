import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import Card from "../components/countries/Card";
import "../assets/css/Countries.css";
import axios from "axios";

const CountriesPage = () => {
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [listCountries, setListCountries] = useState([]);

  function getData() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        console.log("res.data", res.data);
        setListCountries(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("data countries", listCountries);

  return (
    <MainLayout>
      <div className="countries">
        <div className="sort-container">
          <input
            type="range"
            min="1"
            max="250"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          <ul>
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
        </div>
        <div className="cancel">
          {selectedRadio && (
            <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
          )}
        </div>
        <ul className="countries-list justify-content-around">
          {listCountries.length > 0 &&
            listCountries
              .filter((country) => country.region.includes(selectedRadio))
              .sort((a, b) => b.population - a.population)
              .filter((country, index) => index < rangeValue)
              .map((country) => (
                <Card country={country} key={country.name.common} />
              ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default CountriesPage;
