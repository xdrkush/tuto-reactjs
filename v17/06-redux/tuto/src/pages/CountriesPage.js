import "../assets/css/Countries.css";

import Card from "../components/countries/Card";
import MainLayout from "../layouts/MainLayout";

import React, { useState } from "react";
import { useSelector } from "react-redux"
import { store } from "../store";

import { getCountries } from "../store/actions/CountriesActions";
store.dispatch(getCountries());

const CountriesPage = () => {
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const listCountries = useSelector(state => state.countries.data)

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
