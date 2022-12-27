import { Box } from "@mui/system";
import Button from "@mui/material/Button";

// import "../../assets/css/svg.css";
import { Typography } from "@mui/material";

export default function HeaderHome(props) {
  return (
    <Box
      sx={{
        my: 5,
        py: 2,
        textAlign: "center",
        width: "100%",
        position: "relative",
        backgroundColor: "#2F1F34",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Title & subtitle */}
      <Box
        sx={{
          p: 1,
          zIndex: "5",
          width: '90%',
          top: "200px",
          margin: "auto",
          textAlign: "left",
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
            fontSize: "40px",
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
            fontSize: "28px",
          }}
        >
          Envie d’apprendre ?
        </Typography>
        <Button variant="contained">Contained</Button>
      </Box>
    </Box>
  );
}
