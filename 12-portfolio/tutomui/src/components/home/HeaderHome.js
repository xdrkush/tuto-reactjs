import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { ReactComponent as Unicorn } from "../../assets/images/Unicorn.svg";
import { Button, Typography } from "@mui/material";

import { ReactComponent as Fb } from "../../assets/images/Fb.svg";
import { ReactComponent as Twitter } from "../../assets/images/Twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";
import { ReactComponent as Yt } from "../../assets/images/Yt.svg";
import { ReactComponent as Insta } from "../../assets/images/Insta.svg";

import Stack from "@mui/material/Stack";

export default function HeaderHome(props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        minHeight: "80vh",
        p: 2,
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
          top: "80px",
        }}
      >
        Kusholio
      </Typography>
      <Typography
        className="title_header"
        variant="h2"
        sx={{
          zIndex: "5",
          fontSize: "35px",
          position: "relative",
          top: "100px",
        }}
      >
        Dev Web
      </Typography>
      <Typography
        className="title_header"
        variant="h3"
        sx={{
          zIndex: "5",
          fontSize: "30px",
          position: "relative",
          top: "130px",
        }}
      >
        Open-source Maniac
      </Typography>
      <Box sx={{ position: "absolute", top: {sm: "40px", xs: "0px"}, zIndex: "-1" }}>
        <Unicorn width="95vw" />
      </Box>
      {/* <Unicorn width="90vw" /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "auto",
          justifyContent: "space-between",
          pt: "150px",
          zIndex: "5",
        }}
      >
        <Stack direction="column" spacing={2}>
          <Fb />
          <Twitter />
          <Linkedin />
          <Yt />
          <Insta />
        </Stack>
      </Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Button
          sx={{
            zIndex: "5",
            color: "#1CD6C1",
          }}
          onClick={() => navigate("/Project")}
          variant="contained"
        >
          Voir mes projets
        </Button>
      </Box>
    </Box>
  );
}
