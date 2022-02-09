import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { editArticle, getArticles } from '../../store/actions/ArticlesActions'
import { editCategory, getCategory } from '../../store/actions/CategoryActions'

export default function FormModule(props) {
  const { data, str } = props;
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({ ...data });
  const category = useSelector(state => state.category.listCategory);

  console.log("props", props, str);

  const handleChange = (prop) => (event) => {
    // console.log("handleInput", prop, event.target.value);
    setForm({ ...form, [prop]: event.target.value });
  };

  const submitForm = () => {
    console.log("submit", form);
    switch (str) {
      case "articles":
        console.log("edit", str, form);
        dispatch(editArticle(form));
        setTimeout(() => dispatch(getArticles()), 777);
        break;
      case "users":
        console.log("edit", str, form);
        break;
      case "category":
        console.log("edit", str, form);
        dispatch(editCategory(form));
        setTimeout(() => dispatch(getCategory()), 777);
        break;
      default:
        console.log("error submit");
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Object.entries(data).map((arr, index) => {
        const key = arr[0]
        if (key === "id" || key === "_id" || key === "__v") return;
        if (key === "author_id") return;
        if (key === "articles_id") return;
        if (key === "category_id") {
          return (
            <Box key={index}>
              <Select
                sx={{ width: "100%" }}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={form[`${key}`]}
                onChange={handleChange(`${key}`)}
                label={key}
              >
                {category.map((cat, index) => (
                  <MenuItem key={"m" + index} value={cat.name}>
                    {cat.name}: {cat.icon}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{key}</FormHelperText>
            </Box>
          );
        } else {
          return (
            <TextField
              key={index}
              id={`outlined-adornment-${key}`}
              value={form[`${key}`]}
              onChange={handleChange(`${key}`)}
              label={key}
            />
          );
        }
      })}

      <Button onClick={() => submitForm()}>Submit</Button>
    </Box>
  );
}
