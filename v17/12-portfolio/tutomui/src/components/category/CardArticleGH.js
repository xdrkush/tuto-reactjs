import { getArticles, editArticle } from "../../store/actions/ArticlesActions";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Placeholder from "../../assets/images/Placeholder.svg";
import CardHeader from "@mui/material/CardHeader";
import { ReactComponent as AvatarIcon } from "../../assets/images/Avatar.svg";
import { Box } from "@mui/system";

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
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: "370px" },
        minWidth: { xs: "300px", sm: "370px" },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={Placeholder}
        alt="green iguana"
      />
      <CardHeader
        avatar={<AvatarIcon />}
        action={
          <Box sx={{ display: "flex", alignSelf: "center" }}>
            <ExpandMore
              sx={{ color: "#1CD6C1" }}
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        }
        title={
          <CardActionArea>
            <CardContent
              onClick={() =>
                navigate(`/Category/Github`, {
                  state: { category: {
                    name: "Github",
                    articles_id: data
                  } },
                })
              }
            >
              <Typography gutterBottom variant="h5" component="div">
                Github
              </Typography>
              <Typography gutterBottom variant="body" component="div">
                MAR 13 2020
              </Typography>
            </CardContent>
          </CardActionArea>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ mx: { md: 2, sm: 0 } }}>
          {data.map((article, index) => (
            <CardActionArea key={index}>
              <CardContent
                onClick={() =>
                  navigate(`/ArticleGH/${article.name}`, {
                    state: { repo: article },
                  })
                }
              >
                <Typography gutterBottom variant="body" component="div">
                  {index + 1} | {article.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardArticle;
