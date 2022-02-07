import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getArticles, createArticle } from "../../store/actions/ArticlesActions";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
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
  const [name, setName] = useState("name");
  const [icon, setIcon] = useState(1);
  const { handleSearch } = props;
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (name && icon) {
      console.log('Form:', { name, icon })
      await dispatch(createArticle({ name, icon }))
      setName("");
      setIcon("");
      await dispatch(getArticles())
    }
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Search onChange={(e) => handleSearch(e.target.value)} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
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
        </Toolbar>
      </AppBar>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Article</DialogTitle>
        <DialogContent sx={{ mx: { md: 2, sm: 0} }}>
          <TextField
            style={{ minWidth: "70%" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Title article"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            style={{ minWidth: "70%" }}
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            autoFocus
            margin="dense"
            id="price"
            label="Price article"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleForm}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
