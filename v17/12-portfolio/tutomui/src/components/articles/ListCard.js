import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";

const CardArticle = (props) => {
  const { item } = props;
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: "370px" },
        minWidth: { xs: "300px", sm: "370px" },
      }}
    >
      <CardActionArea>
        <CardContent
          onClick={(e) => {
            return navigate(
              item.title
                ? `/Article/${item.title}`
                : `/ArticleGH/${item.name}`,
              {
                state: item.title ? { article: item } : { repo: item },
              }
            );
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {item && item.title}
            {item && item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item ? item.subtitle : "gh"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const ListCard = (props) => {
  const { list, search } = props;

  const S_title = (item) => {
    if (item.title)
      return item.title.toLowerCase().includes(search.toLowerCase());
    if (item.name)
      return item.name.toLowerCase().includes(search.toLowerCase());
  };
  const filterList = list.filter((item) => S_title(item));

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { md: "row", xs: "column" },
        flexWrap: "wrap",
      }}
    >
      {filterList.map((item, index) => {
        return (
          <Box key={index} sx={{ p: 1, maxWidth: "100%" }}>
            <CardArticle key={index} item={item} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ListCard;
