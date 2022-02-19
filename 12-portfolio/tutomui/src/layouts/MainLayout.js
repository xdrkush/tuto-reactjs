import * as React from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItemAvatar,
  ThemeProvider,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../store/actions/ArticlesActions";
import { getCategory } from "../store/actions/CategoryActions";
import { checkUx } from "../store/actions/AuthActions";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import PropTypes from "prop-types";

import { themeUser } from "../config/theme";
import { Box } from "@mui/system";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { style } from "../config/globalStyle";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItem from "@mui/material/ListItem";
import ItemCollapse from "../components/core/ItemCollapse";
import InputBase from "@mui/material/InputBase";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

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

function SimpleDialog(props) {
  const { onClose, selectedValue, open, categories } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const articles = useSelector((state) => state.articles.listArticles);
  const [search, setSearch] = React.useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const C_name = (item) =>
    item.name.toLowerCase().includes(search.toLowerCase());
  const A_title = (item) =>
    item.title.toLowerCase().includes(search.toLowerCase());
  const txt = (txt) => txt.toLowerCase().includes(search.toLowerCase());

  const filterListCategory = categories.filter((item) => C_name(item));
  const filterListArticle = articles.filter((item) => A_title(item));
  const filterListPage = [
    "Home",
    "About",
    "Contact",
    "Project",
    "Category",
  ].filter((item) => txt(item));

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const toCategory = (cat) => {
    navigate(`/Category/${cat.name}`, {
      state: { category: cat },
    });
    onClose(selectedValue);
  };

  const toArticle = (art) => {
    navigate(`/Article/${art.title}`, {
      state: { article: art },
    });
    onClose(selectedValue);
  };
  const toPage = (txt) => {
    navigate(`/${txt}`);
    onClose(selectedValue);
  };

  React.useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <Dialog onClose={handleClose} open={open}>
      <Search
        sx={{
          my: 2,
          height: "45px",
          width: "100%",
          display: "flex",
          alignSelf: "center",
          justifyContent: "space-between",
        }}
        onChange={(e) => handleSearch(e.target.value)}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          autoFocus
          sx={{ minWidth: "500px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <Box sx={{ alignSelf: "center", widht: "auto" }}>
          <Box
            sx={{
              mx: 0.5,
              borderRadius: 2,
              p: 0.2,
              color: "white",
              backgroundColor: "#2F1F34",
            }}
            aria-label="search"
          >
            esc
          </Box>
        </Box>
      </Search>
      <List sx={{ pt: 0, minHeight: "450px", maxHeight: "70vh" }}>
        <ListItem>
          <Avatar sx={{ bgcolor: "#3A3149", color: "white" }}>
            <strong> # </strong>
          </Avatar>
          <Typography sx={{ px: 2, color: "#1CD6C1" }}>
            <strong> Category </strong>
          </Typography>
        </ListItem>
        {filterListCategory.map((cat, index) => (
          <ListItem button onClick={() => toCategory(cat)} key={index}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#3A3149", color: "white" }}>
                <strong>#</strong>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={cat.name} />
          </ListItem>
        ))}
        <ListItem>
          <Avatar sx={{ bgcolor: "#3A3149", color: "white" }}>
            <strong> @ </strong>
          </Avatar>
          <Typography sx={{ px: 2, color: "#1CD6C1" }}>
            <strong> Website </strong>
          </Typography>
        </ListItem>
        {filterListPage.length > 0 &&
          filterListPage.map((txt, index) => (
            <ListItem button onClick={() => toPage(txt)} key={index}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#3A3149", color: "white" }}>
                  <strong> @ </strong>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={txt} />
            </ListItem>
          ))}
        <ListItem>
          <Avatar sx={{ bgcolor: "#3A3149", color: "white" }}>
            <strong> ~ </strong>
          </Avatar>
          <Typography sx={{ px: 2, color: "#1CD6C1" }}>
            <strong> Article </strong>
          </Typography>
        </ListItem>
        {filterListArticle.length > 0 &&
          filterListArticle.map((art, index) => (
            <ListItem button onClick={() => toArticle(art)} key={index}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#3A3149", color: "white" }}>
                  <strong> ~ </strong>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={art.title} />
            </ListItem>
          ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const MainLayout = ({ children }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState("ff");

  const categories = useSelector((state) => state.category.listCategory);
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = (value) => {
    setOpenModal(false);
    setSelectedValue(value);
  };

  const logout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("user_verified");
    localStorage.removeItem("user_admin");
    window.location.reload();
    // navigate("/Login");
  };

  const IconMenuChange = () => {
    if (open !== true)
      return (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "flex" }) }}
        >
          <MenuIcon />
        </IconButton>
      );
    else
      return (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "flex" }) }}
        >
          <ChevronLeftIcon />
        </IconButton>
      );
  };

  React.useEffect(() => {
    dispatch(getCategory());
  }, []);

  React.useEffect(() => {
    dispatch(checkUx());
  }, []);

  // handle what happens on key press
  const handleKeyPress = React.useCallback((event) => {
    
    if (event.ctrlKey === true && event.key === ("k" || "K")) {
      event.preventDefault()
      console.log(`ctrl with K pressed: ${event.key}`);
      handleClickOpen();
    }
  }, []);

  React.useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <ThemeProvider theme={themeUser}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Toolbar>
              {IconMenuChange()}
              <Typography variant="h6" noWrap component="div">
                Welcome to H-land
              </Typography>
            </Toolbar>
            <Search
              sx={{ height: "45px", display: "flex", alignSelf: "center" }}
              // onChange={(e) => handleSearch(e.target.value)}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onClick={handleClickOpen}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              <Box sx={{ alignSelf: "center" }}>
                <Box
                  sx={{
                    mx: 0.5,
                    borderRadius: 2,
                    p: 0.5,
                    color: "white",
                    backgroundColor: "#2F1F34",
                  }}
                  aria-label="search"
                >
                  Ctrl
                </Box>
              </Box>
              <Divider
                sx={{ height: 28, m: 0.5, mt: "7px" }}
                orientation="vertical"
              />
              <Box sx={{ alignSelf: "center" }}>
                <Box
                  sx={{
                    mx: 0.5,
                    borderRadius: 2,
                    p: 0.5,
                    color: "white",
                    backgroundColor: "#2F1F34",
                  }}
                  aria-label="search"
                >
                  <strong>K</strong>
                </Box>
              </Box>
            </Search>

            <SimpleDialog
              selectedValue={selectedValue}
              open={openModal}
              categories={categories}
              onClose={handleClose}
            />
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Home", "About", "Contact", "Project", "Category"].map(
              (link, index) => (
                <ListItem
                  button
                  key={link}
                  onClick={() => navigate({ pathname: `/${link}` })}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={link} />
                </ListItem>
              )
            )}
            {/* Permission */}
            {auth.isVerified === true && (
              <ListItem
                button
                key="/Auth"
                onClick={() => navigate({ pathname: `/Auth` })}
              >
                <ListItemText primary="Auth" />
              </ListItem>
            )}

            {auth.isAdmin === true && (
              <ListItem
                button
                key="/Admin"
                onClick={() => navigate({ pathname: `/Admin` })}
              >
                <ListItemText primary="Admin" />
              </ListItem>
            )}

            {/* {auth.authenticate === false && (
              <ListItem
                button
                key="/Login"
                onClick={() => navigate({ pathname: `/Login` })}
              >
                <ListItemText primary="Login" />
              </ListItem>
            )} */}

            {auth.authenticate === true && (
              <ListItem button onClick={() => logout()}>
                <ListItemText primary="LOGOUT" />
              </ListItem>
            )}
          </List>
          <Divider />
          <List>
            {categories.length > 0 &&
              categories.map((category, index) => {
                return <ItemCollapse key={index} category={category} />;
              })}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
