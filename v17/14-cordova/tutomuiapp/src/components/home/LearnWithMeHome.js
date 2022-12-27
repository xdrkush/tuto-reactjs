import { Box } from "@mui/system";
import { ReactComponent as Carre } from "../../assets/images/Carre.svg";
import { ReactComponent as CarreSecondary } from "../../assets/images/CarreSecondary.svg";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Masonry from "@mui/lab/Masonry";

// import "../../assets/css/svg.css";
import { Button, Typography } from "@mui/material";

const HeaderHome = (props) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "80vh",
        width: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          maxWidth: "40%",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          p: "50px",
        }}
      >
        <Typography
          className="title_header"
          variant="h4"
          sx={{
            color: "primary",
            zIndex: "5",
            fontWeight: "bold",
            fontSize: "38px",
          }}
        >
          Apprenez avec moi
        </Typography>
        <Typography
          className="title_header"
          variant="body"
          sx={{
            zIndex: "5",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla quis lorem ut libero malesuada
          feugiat. Curabitur non nulla sit amet nisl tempus convallis.
        </Typography>
        <Button sx={{ my: "15px", maxWidth: "150px" }} variant="contained">
          Contained
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ textAlign: "left", width: "100%", alignItems: "center" }}>
          <Card sx={{ maxWidth: 275, m: "15px", pb: "35px" }}>
            <CardContent>
              <Carre className="unicorn" />
              <Typography
                sx={{ fontSize: 22 }}
                color="text.secondary"
                gutterBottom
              >
                Tutoriel HTML5
              </Typography>
              <Typography variant="body" component="div">
                a book or other written or printed work, regarded in terms of
                its content rather than its physical form.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: 275,
              m: "15px",
              backgroundColor: "#3A3149",
              pb: "35px",
            }}
          >
            <CardContent>
              <CarreSecondary className="unicorn" />
              <Typography
                sx={{ fontSize: 22 }}
                color="text.secondary"
                gutterBottom
              >
                Tutoriel CSS (débutant)
              </Typography>
              <Typography variant="body" component="div">
                a book or other written or printed work, regarded in terms of
                its content rather than its physical form.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ textAlign: "left", width: "100%", alignSelf: "center" }}>
          <Card
            sx={{
              maxWidth: 275,
              m: "15px",
              backgroundColor: "#3A3149",
              pb: "35px",
            }}
          >
            <CardContent>
              <CarreSecondary className="unicorn" />
              <Typography
                sx={{ fontSize: 22 }}
                color="text.secondary"
                gutterBottom
              >
                Apprendre Javascript
              </Typography>
              <Typography variant="body" component="div">
                a book or other written or printed work, regarded in terms of
                its content rather than its physical form.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderHome;
