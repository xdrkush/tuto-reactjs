import * as React from "react";
import { Box } from "@mui/system";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { useNavigate } from "react-router";
import { Avatar, Divider, ListItemAvatar, Typography } from "@mui/material";

const ItemCollapse = (props) => {
  const { category } = props;
  const navigate = useNavigate();
  const [openList, setOpenList] = React.useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };

  return (
    <Box sx={{ p: 0, m: 0 }}>
      <ListItemButton
        onClick={handleClick}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#3A3149" }}>
            <strong> # </strong>
          </Avatar>
        </ListItemAvatar>
        <Typography variant="h6">{category.name}</Typography>
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div">
          {category.articles_id.map((art, index) => {
            return (
              <ListItemButton
                key={index}
                sx={{ pl: 2, bgcolor: "#211525" }}
                onClick={() =>
                  navigate(`/Article/${art.title}`, { state: { article: art } })
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "#3A3149" }}>
                    <strong> ~ </strong>
                  </Avatar>
                </ListItemAvatar>
                <Typography variant="body">{art.title}</Typography>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
};
export default ItemCollapse;
