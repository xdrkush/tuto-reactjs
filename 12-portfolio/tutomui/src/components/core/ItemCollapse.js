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

const ItemCollapse = (props) => {
  const { category } = props;
  const navigate = useNavigate()
  const [openList, setOpenList] = React.useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };

  return (
    <Box sx={{ p: 0, m: 0 }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon onClick={() => navigate(`/Category/${category.name}`, { state: { category }})}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={category.name} />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {category.articles_id.map((art, index) => {
            return (
              <ListItemButton key={index} sx={{ pl: 4 }} onClick={() => navigate(`/Article/${art.title}`, { state: { article: art }})}>
                <ListItemText secondary={art.title} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
};
export default ItemCollapse;
