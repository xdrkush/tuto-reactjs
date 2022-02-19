import { Box } from "@mui/system";
import { ReactComponent as Unicorn } from "../../assets/images/Unicorn.svg";
import { ReactComponent as Circle } from "../../assets/images/Ellipse.svg";
// import "../../assets/css/svg.css";
import { Typography } from "@mui/material";

const HeaderHome = (props) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        minHeight: "80vh",
        width: "100%",
      }}
    >
      <Typography
        className="title_header"
        variant="h1"
        sx={{
          color: "primary",
          fontSize: "60px",
          zIndex: "5",
          position: "relative",
          top: "100px",
        }}
      >
        Kusholio
      </Typography>
      <Typography
        className="title_header"
        variant="h2"
        sx={{
          zIndex: "5",
          fontSize: "60px",
          position: "relative",
          top: "100px",
        }}
      >
        Développeur-Web
      </Typography>
      <Typography
        className="title_header"
        variant="h3"
        sx={{
          zIndex: "5",
          fontSize: "60px",
          position: "relative",
          top: "100px",
        }}
      >
        Open-source Maniac
      </Typography>
      <Box
        sx={{
          zIndex: '0',
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          mx: "auto",
          p: '25px'
        }}
      >
        <Unicorn className="unicorn" />
      </Box>
    </Box>
  );
};

export default HeaderHome;
