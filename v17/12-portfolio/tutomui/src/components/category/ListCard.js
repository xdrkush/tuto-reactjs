import CardArticle from "./CardArticle";
import CardArticleGH from "./CardArticleGH";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const ListCard = (props) => {
  const { list, search } = props;
  const repoGH = useSelector((state) => state.github.repos);

  const S_name = (item) =>
    item.name.toLowerCase().includes(search.toLowerCase());

  const filterList = list.filter((item) => S_name(item));
  const filterReposGH = repoGH.filter((item) => S_name(item));

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
      {filterReposGH.length > 0 && (
        <Box sx={{ p: 1, maxWidth: "100%" }}>
          <CardArticleGH data={filterReposGH} />
        </Box>
      )}
      {filterList.map((category, index) => {
        return (
          <Box key={index} sx={{ p: 1, maxWidth: "100%" }}>
            <CardArticle data={category} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ListCard;
