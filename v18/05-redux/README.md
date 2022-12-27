# 05-redux

# C'est quoi REDUX ?

Redux est un store (magasin en traduction litéral FR), pourquoi ce nom, certainement car il nous permetra de stocker des fonctions (Actions), des variables globales (Selectors, souvent appeller State), et stocker dans un Reducer (centralisation des données). Ce qui est pratique c'est nous pourrions appeler chacune de ses intéractions partout dans notre application en récupérant l'endroit il sont stocker.

Actions = Fonction stocker
Reducer = facilite le dispatch
Selector = Variables globale

En premier nous utilisons configureStore, qui nous permet de configurer les imports de tous nos reducers
/src/store/index.js
```jsx
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "./reducers"

export default configureStore({
    reducer: rootReducer,
})
```

Ensuite nous utilisons combineReducers, qui nous permet de fusionné plusieurs store redux en une seule instance
/src/store/reducers/index.js
```jsx
import { combineReducers } from 'redux'
import CountryReducer from './CountryReducer'

const rootReducer = combineReducers({
  country: CountryReducer,
})

export default rootReducer
```

Ensuite nous devons créé un Reducer
/src/store/reducers/CountriesReducers.js

```jsx
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        listCountry: []
    },
    reducers: {
        getCountriesData: (state, action) => {
            // // Ici nous utilisons axios afin de call l'API
            // const res = await axios.get("https://restcountries.com/v3.1/all")
            console.log('STORE :: res data country')
            // // Ensuite nous integrons nos data dans le state listCountries
            state.listCountry = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { getCountriesData } = countrySlice.actions

export const fetchDataCountry = () => async (dispatch, getData) => {
    const res = await axios.get("https://restcountries.com/v3.1/all")
    dispatch({ type: 'country/getCountriesData', payload: res.data })
};

export default countrySlice.reducer

```

Enfin il nous manque plus qu'a appeler notre store.
/src/pages/CountryPages.js

```jsx
import { fetchDataCountry } from '../store/reducers/CountryReducer';
...

    ...

    useEffect(() => {
        dispatch(fetchDataCountry())
    }, []);
    ...

```

Puis appeler nos selectors
/src/pages/CountriesPages.js

```jsx
const listCountries = useSelector(state => state.countries.data)
```

# Install

```
npm i react-redux redux-devtools redux-thunk
```

# Docs
  - https://react-redux.js.org/introduction/getting-started
