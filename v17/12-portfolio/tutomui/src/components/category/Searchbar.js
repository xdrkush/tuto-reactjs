import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getArticles,
  createArticle,
} from "../../store/actions/ArticlesActions";
import Editor from "../admin/Editor";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormHelperText, MenuItem, Select, Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({title: 'defaultTitle', subtitle: 'defaultSubTitle', description: '<h4> Default Description </h4>'});
  const category = useSelector((state) => state.category.listCategory);
  const { handleSearch } = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitForm = () => {
    console.log("submitform", form);
    dispatch(createArticle(form));
    setTimeout(() => dispatch(getArticles()), 777);
  };

  const handleData = (value) => {
    setForm({ ...form, description: value });
  };

  // Change state Form
  const handleChange = (prop) => (event) => {
    // console.log("handleInput", prop, event.target.value);
    setForm({ ...form, [prop]: event.target.value });
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box
      sx={{
        textAlign: "left",
        display: "flex",
        flexDirection: {xs: "column", sm: "row"},
        alignSelf: "center",
        width: '100vw',
        maxWidth: '100vw',
        p:2
      }}
    >
      {/* Decoration + Text */}
      <Box
        sx={{
          textAlign: "left",
          pt: "0px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1CD6C1",
            position: 'relative',
            top: '20px',
            height: "4px",
            width: "75px",
            mx: 2
          }}
        />

        <Box>
          <Typography
            className="title_header"
            variant="h4"
            sx={{
              color: "primary",
              zIndex: "5",
              fontWeight: "bold",
              fontSize: "38px",
            }}
          >
            Catégories
          </Typography>
          <Typography
            className="title_header"
            variant="body"
            sx={{
              zIndex: "5",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Découvrez toutes mes ressources libres.
          </Typography>
        </Box>
      </Box>
        {/* Search Input */}
      <Box
        sx={{
          width: {xs: "100%", sm: "100%"},
          py: "20px",
          display: "flex",
          alignSelf: "end",
          justifyContent: "end",
        }}
      >
        <Search
          sx={{ height: "45px" }}
          onChange={(e) => handleSearch(e.target.value)}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {auth.isAdmin === true && (
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="medium"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleClickOpen}
              color="inherit"
            >
              <AddIcon />
            </IconButton>
          </Box>
        )}

      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        sx={{ bgcolor: "#211525" }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#2F1F34",
          }}
        >
          <Typography
            className="title_header"
            variant="h5"
            sx={{
              color: "primary",
              my: 2,
              zIndex: "5",
              fontWeight: "bold",
            }}
          >
            Create New Article
          </Typography>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              mx: 0.5,
              bgcolor: "#211525",
              height: "40px",
              borderRadius: 2,
              p: 0.4,
              px: 1,
            }}
            aria-label="search"
          >
            esc
          </Button>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#211525" }}>
          <Box sx={{ width: "100%", mt: 5 }}>
            <Typography
              className="title_header"
              variant="h4"
              sx={{
                color: "primary",
                my: 2,
                zIndex: "5",
                fontWeight: "bold",
                textAlign: 'center',
                fontSize: "38px",
              }}
            >
              {form && form.title}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#1CD6C1",
                height: "4px",
                my: 5,
                m: "auto",
                width: "75px",
              }}
            />
            <Typography
              className="title_header"
              variant="h5"
              sx={{
                zIndex: "5",
                textAlign: 'center',
                my: 2,
              }}
            >
              {form && form.subtitle}
            </Typography>
            <Box sx={{ my: 5, p: 2, display: "flex", flexDirection: "column" }}>
              <Box>
                <div
                  dangerouslySetInnerHTML={{ __html: form.description }}
                ></div>
              </Box>
            </Box>
          </Box>
          {auth.isAdmin === true && (
            <Box
              sx={{
                my: 5,
                p: 2,
                display: "flex",
                flexDirection: "row-reverse",
                width: "100%",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Select
                  sx={{ width: "20%" }}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={form[`category_id`]}
                  onChange={handleChange(`category_id`)}
                  label={"Category_id"}
                >
                  {category.map((cat, index) => (
                    <MenuItem key={index} value={cat.name}>
                      {cat.name}: {cat.icon}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  variant="filled"
                  sx={{ width: "30%", py: 2 }}
                  value={form[`title`]}
                  onChange={handleChange(`title`)}
                  label={"Title"}
                />
                <TextField
                  variant="filled"
                  sx={{ width: "50%", py: 2 }}
                  value={form[`subtitle`]}
                  onChange={handleChange(`subtitle`)}
                  label={"Subtitle"}
                />
                {/* Wysiwyg */}
                <Editor data={form.description} handleData={handleData} />
                <Button onClick={() => submitForm(form)} variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitForm}>Submit</Button>
        </DialogActions>
      </Dialog>
      </Box>

    </Box>
  );
}
