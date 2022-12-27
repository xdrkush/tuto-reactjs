import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        listCountry: []
    },
    reducers: {
        getCountriesData: (state, action) => {
            // Ensuite nous integrons nos data dans le state listCountry
            state.listCountry = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { getCountriesData } = countrySlice.actions

/* ************************************
 * Ici nous pouvons stocker nos actions
 * ************************************ */ 

export const fetchDataCountry = () => async (dispatch) => {
    // // Ici nous utilisons axios afin de call l'API
    const res = await axios.get("https://restcountries.com/v3.1/all")
    console.log('STORE :: fetchDataCountry ', res.data)
    // Ensuite on dispatch notre resultat avec 
    dispatch({ type: 'country/getCountriesData', payload: res.data })
};

// export const maFunction = () => (dispatch) => {
//     Faire des choses ...
//     Envoyer le résultat dans dispatch afin de trouver le bon setter (kelkechoseSlice.reducers)
//     dispatch({ type: 'leStore/leReducer', payload: data })
// };

export default countrySlice.reducer