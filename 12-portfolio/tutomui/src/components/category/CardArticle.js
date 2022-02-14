import { getArticles, editArticle } from "../../store/actions/ArticlesActions";
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
  const { data } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = async (id) => dispatch(deleteArticle(id));
  const toArticleID = async (article) =>
    navigate("/Article/" + article.title, { state: { article } });

  const handleForm = async (e) => {
    e.preventDefault();
    // console.log("Form:", { id: data.id });
    await dispatch(editArticle({ id: data.id }));
    await dispatch(getArticles());
  };

  return (
    <Card key={data._id} sx={{ maxWidth: 345, minWidth: 275 }}>
      <CardActionArea>
        <CardContent onClick={() => navigate(`/Category/${data.name}`, { state: { category: data }})}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="h5">{data.icon}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
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
          {data.articles_id.map((article, index) => (
            <Typography key={index} gutterBottom variant="h5" component="div" onClick={e => navigate(`/Article/${article.title}`, { state: { article: article }})}>
              {index +1} | {article.title}: {article.subtitle}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardArticle;
