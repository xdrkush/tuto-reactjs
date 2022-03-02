import { Box } from "@mui/system";
import Button from '@mui/material/Button';

// import "../../assets/css/svg.css";
import { Typography } from "@mui/material";

const HeaderHome = (props) => {
  return (
    <Box
      sx={{
        my: "100px",
        py: "75px",
        px: "25px",
        textAlign: "center",
        minHeight: "80vh",
        width: "100%",
        position: "relative",
        backgroundColor: "#2F1F34",
      }}
    >
      {/* Title & subtitle */}
      <Box
        sx={{
          zIndex: "5",
          top: "200px",
          py: "50px",
          px: "25px",
          margin: "auto",
          textAlign: "left",
          mb: "50px",
          backgroundColor: "#211525",
        }}
      >
        <Typography
          className="title_header"
          variant="h5"
          sx={{
            color: "primary",
            top: "100px",
            m: "0",
            p: "0",
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          Un projet ?
        </Typography>
        <Typography
          className="title_header"
          variant="h6"
          sx={{
            color: "primary",
            top: "100px",
            m: "0",
            p: "0",
            fontWeight: "bold",
            fontSize: "60px",
          }}
        >
          Envie d’apprendre ?
        </Typography>
        <Button variant="contained">Contained</Button>

      </Box>
    </Box>
  );
};

export default HeaderHome;
