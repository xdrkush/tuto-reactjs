import { Box } from "@mui/system";
import { ReactComponent as Unicorn } from "../../assets/images/Unicorn.svg";
import { ReactComponent as Circle } from "../../assets/images/Ellipse.svg";
// import "../../assets/css/svg.css";
import { Typography } from "@mui/material";

const HeaderHome = (props) => {
  return (
    <Box sx={{ textAlign: "center", maxHeight: "80vh", width: "100%" }}>
      <Box sx={{ textAlign: "center", height: "100%", width: "100%" }}>
        <Typography
          className="title_header"
          variant="h1"
          sx={{
            color: 'primary',
            zIndex: '5',
            position: "relative",
            top: '100px',
          }}
        >
          Kusholio
        </Typography>
        <Typography
          className="title_header"
          variant="h2"
          sx={{
            zIndex: '5',
            position: "relative",
            top: '100px',
          }}
        >
          Développeur-Web
        </Typography>
        <Typography
          className="title_header"
          variant="h3"
          sx={{
            zIndex: '5',
            position: "relative",
            top: '100px',
          }}
        >
          Open-source Maniac
        </Typography>
        <Box
          sx={{
            position: "relative",
            top: '-150px',
          }}
        >
          <Circle className="ellipse" />
        </Box>
        <Box
          sx={{
            position: "relative",
            top: "-390px"
          }}
        >
          <Unicorn className="unicorn" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderHome;
