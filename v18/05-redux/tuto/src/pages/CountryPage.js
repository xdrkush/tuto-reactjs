import MainLayout from '../layouts/MainLayout';
import ListCountry from '../components/ListCountry';
import FilterCountry from '../components/FilterCountry';

import { fetchDataCountry } from '../store/reducers/CountryReducer';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function CountryPage() {
    const countries = useSelector((state) => state.country.listCountry)
    const dispatch = useDispatch()
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState("");

    useEffect(() => {
        dispatch(fetchDataCountry())
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
