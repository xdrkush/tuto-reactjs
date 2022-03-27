import * as React from "react";
import ItemCollapse from "../components/core/ItemCollapse";
import ItemGHCollapse from "../components/core/ItemGHCollapse";
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
import InputBase from "@mui/material/InputBase";
import AppBar from "@mui/material/AppBar";

const drawerWidth = 240;

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
    marginLeft: 0,
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
  const reposGH = useSelector((state) => state.github.repos);
  const [search, setSearch] = React.useState("");

  const handleSearch = (value) => {
    console.log("Search input", value, value.length);
    if (value.length > 0) setSearch(value);
    else setSearch("");
  };

  const C_name = (item) =>
    item.name.toLowerCase().includes(search.toLowerCase());
  const A_title = (item) =>
    item.title.toLowerCase().includes(search.toLowerCase());
  const txt = (txt) => txt.toLowerCase().includes(search.toLowerCase());

  const filterListCategory = categories.filter((item) => C_name(item));
  const filterListArticleGH = reposGH.filter((item) => C_name(item));
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
  const toArticleGH = (art) => {
    navigate(`/ArticleGH/${art.name}`, {
      state: { repo: art },
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
      <Box sx={{ minWidth: { xs: "90%", sm: "550px" } }}>
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
            sx={{ width: "100%" }}
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

        <List
          sx={{ pt: 0, minHeight: "450px", maxHeight: "70vh", width: "100%" }}
        >
          <ListItem>
            <Avatar sx={{ bgcolor: "#3A3149" }}>
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
                  <Avatar sx={{ bgcolor: "#3A3149" }}>
                    <strong> @ </strong>
                  </Avatar>
                </ListItemAvatar>
                <Box>
                  <ListItemText primary={txt} />
                  <ListItemText primary={`/${txt}`} />
                </Box>
              </ListItem>
            ))}
          <ListItem>
            <Avatar sx={{ bgcolor: "#3A3149" }}>
              <strong> ~ </strong>
            </Avatar>
            <Typography sx={{ px: 2, color: "#1CD6C1" }}>
              <strong> Github </strong>
            </Typography>
          </ListItem>
          {filterListArticleGH.length > 0 &&
            filterListArticleGH.map((art, index) => (
              <ListItem button onClick={() => toArticleGH(art)} key={index}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#3A3149" }}>
                    <strong> ~ </strong>
                  </Avatar>
                </ListItemAvatar>
                <Box>
                  <ListItemText primary={art.name} />
                  <ListItemText primary={`/Article/${art.name}`} />
                </Box>
              </ListItem>
            ))}
          <ListItem>
            <Avatar sx={{ bgcolor: "#3A3149" }}>
              <strong> # </strong>
            </Avatar>
            <Typography sx={{ px: 2, color: "#1CD6C1" }}>
              <strong> Category </strong>
            </Typography>
          </ListItem>
          {filterListCategory.map((cat, index) => (
            <ListItem button onClick={() => toCategory(cat)} key={index}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#3A3149" }}>
                  <strong>#</strong>
                </Avatar>
              </ListItemAvatar>
              <Box>
                <ListItemText primary={cat.name} />
                <ListItemText primary={cat.icon} />
              </Box>
            </ListItem>
          ))}
          <ListItem>
            <Avatar sx={{ bgcolor: "#3A3149" }}>
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
                  <Avatar sx={{ bgcolor: "#3A3149" }}>
                    <strong> ~ </strong>
                  </Avatar>
                </ListItemAvatar>
                <Box>
                  <ListItemText primary={art.title} />
                  <ListItemText primary={`/Article/${art.title}`} />
                </Box>
              </ListItem>
            ))}
        </List>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const MainLayout = ({ children }, props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState("ff");

  const categories = useSelector((state) => state.category.listCategory);
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

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

  React.useEffect(() => {
    dispatch(getCategory());
  }, []);

  React.useEffect(() => {
    dispatch(checkUx());
  }, []);

  // handle what happens on key press
  const handleKeyPress = React.useCallback((event) => {
    if (event.ctrlKey === true && event.key === ("k" || "K")) {
      event.preventDefault();
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

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Home", "About", "Contact", "Project", "Category"].map(
          (link, index) => (
            <ListItem
              button
              active
              key={link}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                return navigate({ pathname: `/${link}` });
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#3A3149" }}>
                  <strong> @ </strong>
                </Avatar>
              </ListItemAvatar>
              <Typography variant="h5" sx={{ fontSize: 20 }}>
                {link.toString()}
              </Typography>
            </ListItem>
          )
        )}
        <Divider />
        <List>
          <ItemGHCollapse closeDrawer={setMobileOpen}/>
        </List>
        <Divider />
        {/* Permission */}
        {auth.isVerified === true && (
          <ListItem
            button
            key="/Auth"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              return navigate({ pathname: `/Auth` });
            }}
          >
            <Typography variant="h5">Auth</Typography>
          </ListItem>
        )}

        {auth.isAdmin === true && (
          <ListItem
            button
            key="/Admin"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              navigate({ pathname: `/Admin` });
            }}
          >
            <Typography variant="h5">Admin</Typography>
          </ListItem>
        )}

        {auth.authenticate === false && (
          <ListItem
            button
            active
            key="/Login"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              navigate({ pathname: `/Login` });
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#3A3149" }}>
                <strong> % </strong>
              </Avatar>
            </ListItemAvatar>
            <Typography variant="h5" sx={{ fontSize: 20 }}>
              Login
            </Typography>
          </ListItem>
        )}

        {auth.authenticate === true && (
          <ListItem
            button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              logout();
              navigate({ pathname: `/` });
            }}
          >
            <Typography variant="h5">LOGOUT</Typography>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        {categories.length > 0 &&
          categories.map((category, index) => {
            return (
              <ItemCollapse
                key={index}
                category={category}
                closeDrawer={setMobileOpen}
              />
            );
          })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={themeUser}>
      <GlobalStyles styles={{ ...style }} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: "100vw",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", ml: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              edge="start"
            >
              {mobileOpen !== true ? <MenuIcon /> : <ChevronLeftIcon />}
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              H-land
            </Typography>

            <Search
              onClick={handleClickOpen}
              sx={{
                height: "45px",
                display: "flex",
                alignSelf: "center",
                maxWidth: "50%",
              }}
              // onChange={(e) => handleSearch(e.target.value)}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
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

        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            // ModalProps={{
            //   keepMounted: true,
            // }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        <Box component="main" sx={{ maxWidth: "100%" }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
