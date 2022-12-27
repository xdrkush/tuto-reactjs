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

const HeaderHome = (props) => {
  const navigate = useNavigate();
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
          zIndex: "0",
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          mx: "auto",
          p: "25px",
        }}
      >
        <Unicorn className="unicorn" />
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", height: 'auto', justifyContent: "space-between", pt: '20%' }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            top: "80vh",
          }}
        >
          <Fb />
          <Twitter />
          <Linkedin />
          <Yt />
          <Insta />
        </Stack>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "end" }}
      >
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
};

export default HeaderHome;
