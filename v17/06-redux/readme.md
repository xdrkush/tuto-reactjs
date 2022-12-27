# 06-Redux

```
npm i react-redux
npm i redux-devtools-extension redux-thunk
```
# 06-Redux

(Warn l'architecture est réaliser avec la v7.2 de redux)

# C'est quoi REDUX ?

Redux est un store (magasin en traduction litéral FR), pourquoi ce nom, certainement car il nous permetra de stocker des fonctions (Actions), des variables globales (Selectors, souvent appeller State), et stocker dans un Reducer (centralisation des données). Ce qui est pratique c'est nous pourrions appeler chacune de ses intéractions partout dans notre application en récupérant l'endroit il sont stocker.

Actions = Fonction stocker
Reducer = facilite le dispatch
Selector = Variables globale

En premier nous utilisons combineReducers, qui nous permet de fusionné plusieurs store redux en une seule instance
/src/store/index.js

```jsx
const rootReducer = combineReducers({
  countries: CountriesReducer
});
```

Ensuite nous devons créé un Reducer
/src/store/reducers/CountriesReducers.js

```jsx

// Selector
const initialState = {
  data: []
};

// Reducer
export function CountriesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case Actions.GET_COUNTRIES_DATA:
      return { data: action.payload };
  }
}

```

Et enfin nos actions
/src/store/actions/CountriesActions.js

```jsx
export const getCountries = () => {
  return (dispatch) => {
    return axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        dispatch({ type: GET_COUNTRIES_DATA, payload: res.data})
      })
      .catch(err => console.log(err));
  }
};

```

puis vous verrez que je crée la relation entre mon réducer et les actions grâce au fichier ActionsTypes.js il nous ai utile afin de mieux dispatch nos resultat dans le Reducer
/src/store/actions/ActionsTypes.js

```jsx
export const GET_COUNTRIES_DATA = "GET_COUNTRIES_DATA";
```

Enfin il nous manque plus qu'a appeler notre store.
/src/pages/CountriesPages.js

```jsx
store.dispatch(getCountries());
```

Puis appeler nos selectors
/src/pages/CountriesPages.js

```jsx
const listCountries = useSelector(state => state.countries.data)
```

# Install

```
npm i react-redux
npm i redux-devtools-extension redux-thunk
```

# Docs
  - https://redux.js.org/introduction/getting-started
