# 02-props

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

