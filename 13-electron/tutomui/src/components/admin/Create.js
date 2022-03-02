import * as React from "react";
import {
  getCategory,
  createCategory,
} from "../../store/actions/CategoryActions";
import {
  getArticles,
  createArticle,
} from "../../store/actions/ArticlesActions";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function CreateModule(props) {
  const dispatch = useDispatch();
  const { data, str } = props;
  const [form, setForm] = React.useState({ ...data });
  const category = useSelector(state => state.category.listCategory)

  // console.log("props", props);
  const handleChange = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  React.useEffect(() => {
    dispatch(getCategory())
  }, []);

  const submitForm = (params) => {
    // console.log("submit", form, params);
    switch (params) {
      case "articles":
        // console.log("create", params, form);
        dispatch(createArticle(form));
        // setTimeout(() => dispatch(getArticles()), 777);
        break;
      case "users":
        // console.log("create", params, form);
        break;
      case "category":
        // console.log("create", params, form);
        dispatch(createCategory(form));
        setTimeout(() => dispatch(getCategory()), 777);
        break;
      default:
        // console.log("error submit");
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {Object.entries(data).map((arr, index) => {
        const key = arr[0]
        if (key === "_id") return;
        if (key === "author_id") return;
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
                  <MenuItem key={index} value={cat.name}>
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
              value={form[`${key}`]} // form.name
              onChange={handleChange(`${key}`)}
              label={key}
            />
          );
        }
      })}

      <Button onClick={() => submitForm(str)}>Submit</Button>
    </Box>
  );
}
