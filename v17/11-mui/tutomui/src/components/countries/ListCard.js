import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { getCountries } from "../../store/actions/CountriesActions";

import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slider from "@mui/material/Slider";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const ListCard = (props) => {
  const [rangeValue, setRangeValue] = useState(5);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    store.dispatch(getCountries());
  }, []);

  const listCountries = useSelector((state) => state.countries.data);

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Slider
            sx={{ maxWidth: { md: "50%" } }}
            min={0}
            max={100}
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
            aria-label="Default"
            valueLabelDisplay="auto"
          />

          <Box sx={{ flexGrow: 1 }} />
          <RadioGroup
            sx={{
              width: "50vw",
              pl: 5,
            }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {radios.map((radio, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={radio}
                  control={<Radio />}
                  label={radio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
              );
            })}
            <Typography onClick={() => setSelectedRadio("")}>
              Annuler recherche
            </Typography>
          </RadioGroup>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          flexWrap: "wrap",
        }}
      >
        {listCountries
          .filter((country) => country.region.includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .filter((country, index) => index < rangeValue)
          .map((item, index) => {
            return (
              <Box
                key={index}
                sx={{ p: 1, width: "auto", minWidth: "325px", display: "flex" }}
              >
                <Card sx={{ width: "100%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.flags.svg}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name.common}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
      </Box>
    </Container>
  );
};

export default ListCard;
