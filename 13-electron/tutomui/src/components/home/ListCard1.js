import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ListCard = (props) => {
  const { list } = props;
  // const listCard = [
  //   {
  //     id: 0,
  //     title: "titre 1",
  //     subtitle: "sous-titre 1",
  //     img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
  //   },
  //   {
  //     id: 1,
  //     title: "titre 2",
  //     subtitle: "sous-titre 2",
  //     img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
  //   },
  //   {
  //     id: 2,
  //     title: "titre 3",
  //     subtitle: "sous-titre 3",
  //     img: "https://yt3.ggpht.com/a-/AAuE7mDd4IGaJjE8rXz_cxh97PTYGSBcpaIBjid34w=s900-mo-c-c0xffffffff-rj-k-no",
  //   },
  // ];

  return (
    <Container maxWidth="lg" >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" gutterBottom component="div">
          Liste Cards
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          flexDirection: { md: "row", xs: "column" },
          flexWrap: 'wrap'
        }}
      >
        {list.map((item) => {
          return (
            <Box key={item.id} sx={{ p: 1 }}>
              <Card key={item.id} sx={{ maxWidth: 345, minWidth: 275 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ListCard;
