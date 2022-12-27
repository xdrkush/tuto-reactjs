import {
  getArticles,
  editArticle,
} from "../../store/actions/ArticlesActions";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import { deleteArticle } from "../../store/actions/ArticlesActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

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
  const toArticleID = async (category) =>
    navigate("/Category/" + category.name, { state: { category } });

  const handleForm = async (e) => {
    e.preventDefault();
      // console.log("Form:", { id: item._id, });
      await dispatch(editArticle({ id: item._id, }));
      await dispatch(getArticles());
  };

  return (
    <Card key={item._id} sx={{ maxWidth: 345, minWidth: 275 }}>
      <CardActionArea>
        <CardContent onClick={e => navigate("/Article/" + item.title.name, { state: { article: item } })}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardArticle;
