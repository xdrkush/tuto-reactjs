# 01-component-props

# Un composant c'est quoi ?

Avec React nous allons pouvoir créé des composants. C'est un bout de code parser et indépendant dans notre architecture, il peut contenir un ensemble de fonction, attendre des datas de son parents (props), ou bien même contenir d'autre composant. La manière la plus adéquate de créé un composant React est bien de le faire de manière modulaire et réutilisable.

en savoir plus ici: https://fr.reactjs.org/docs/components-and-props.html

# Doc:
  - https://fr.reactjs.org/docs/react-component.html
  - https://reactjs.org/docs/components-and-props.html


# C'est quoi une props ?

Une props est une valeur qui est envoyer d'un comosant parent vers un enfant.

Voici comment envoyer les data du parent vers l'enfant,

```jsx
<Enfant myprops={data} />
```

et voici comment les récupérer dans l'enfant,

```jsx
const Footer = (props) => {
  const { myprops } = props

  console.log(props.myprops, myprops) // nous devrions avoir le même réultat

  return (
    <div className="footer">
      <p>Footer of {props.title}</p>
    </div>
  );
};
```

Une props peut être une valeur fixe, une fonction, ...

# Doc:
  - https://chrisdevcode.hashnode.dev/how-to-create-a-layout-component-react
