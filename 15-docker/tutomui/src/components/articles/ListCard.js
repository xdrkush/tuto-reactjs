import CardArticle from "./CardArticle";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

const ListCard = (props) => {
  const { list, search } = props;

  const S_title = (item) =>
    item.title.toLowerCase().includes(search.toLowerCase());
  const filterList = list.filter((item) => S_title(item))

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          flexWrap: "wrap",
        }}
      >
        {filterList.map((item) => {
          return (
            <Box key={item.id} sx={{ p: 1 }}>
              <CardArticle key={item.id} item={item} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ListCard;
