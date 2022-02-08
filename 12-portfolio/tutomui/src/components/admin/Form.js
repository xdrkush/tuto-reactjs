import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";

export default function FormModule(props) {
  const { data } = props;
  const [form, setForm] = React.useState({ ...data });
  const category = useSelector(state => state.category.listCategory)

  console.log("props", props);

  const handleChange = (prop) => (event) => {
    // console.log("handleInput", prop, event.target.value);
    setForm({ ...form, [prop]: event.target.value });
  };

  const submitForm = () => {
    console.log("submit", form);
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
