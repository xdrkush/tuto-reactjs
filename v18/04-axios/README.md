# 04-axios

# Axios c'est quoi ?

Axios est un client HTTP basé sur les promesses compatible avec node.js et les navigateurs. Il est isomorphique (c’est à dire qu’il peut opérer dans le navigateur et dans node.js avec le même code). Côté serveur, il utilise le module natif http de node.js, et côté client (navigateur) il utilise les XMLHttpRequests.

source: https://axios-http.com/fr/docs/intro

Axios nous est utile avec react afin de faire des requêtes sur une API par exemple, ensuite nous pourrions demander à react de nous intégrer les data du resultat dans notre application.

exemple dans le composant /src/pages/CountriesPage.js

```
npm i axios
```
