import {
  getArticles,
  editArticle,
} from "../../store/actions/ArticlesActions";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router";
import { deleteArticle } from "../../store/actions/ArticlesActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { TextField } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardArticle = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async (id) => dispatch(deleteArticle(id));
  const toArticleID = async (article) =>
    navigate("/Article/" + article.title, { state: { article  } });

  const handleForm = async (e) => {
    e.preventDefault();
      console.log("Form:", { id: item.id, });
      await dispatch(editArticle({ id: item.id, }));
      await dispatch(getArticles());
  };

  return (
    <Card key={item.id} sx={{ maxWidth: 345, minWidth: 275 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleDelete(item.id)}
          size="small"
          color="primary"
        >
          Delete
        </Button>
        <Button onClick={() => toArticleID(item)} size="small" color="primary">
          View more
        </Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ mx: { md: 2, sm: 0 } }}>
          <TextField
            style={{ minWidth: "70%" }}
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
            autoFocus
            margin="dense"
            id="price"
            label="Price article"
            type="number"
            fullWidth
            variant="standard"
          />
          <Button onClick={handleForm}>Submit</Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardArticle;
