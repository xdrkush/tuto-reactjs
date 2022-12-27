import MainLayout from '../layouts/MainLayout';
import ListCountry from '../components/ListCountry';
import FilterCountry from '../components/FilterCountry';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CountryPage() {
    const [countries, setCountries] = useState([])
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState("");

    // La function qui déclenche notre call api avec axios
    function getData() {
        // Ici nous utilisons axios afin de call l'API
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => {
                // Ici nous sommes dans le callback de résultat
                console.log("res.data", res.data);
                // Ensuite nous integrons nos data dans le state listCountries
                setCountries(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <MainLayout>
            {/* Barre pour filtrer nos elements */}
            <FilterCountry
                rangeValue={rangeValue}
                setRangeValue={setRangeValue}
                selectedRadio={selectedRadio}
                setSelectedRadio={setSelectedRadio}
            />

            {/* Liste de nos element récupérer de notre REQ axios */}
            <ListCountry
                list={countries}
                rangeValue={rangeValue}
                selectedRadio={selectedRadio}
            />
            
        </MainLayout>
    );
}
