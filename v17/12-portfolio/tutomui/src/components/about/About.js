import { Box } from "@mui/system";
import { ReactComponent as Perso } from "../../assets/images/Perso.svg";
import { ReactComponent as Fb } from "../../assets/images/Fb.svg";
import { ReactComponent as Twitter } from "../../assets/images/Twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";

import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";

const AboutPage = (props) => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        width: "90vw",
        display: "flex",
        position: "relative",
        flexDirection: "row-reverse",
        p: 2
      }}
    >
      {/* Image */}
      <Box
        sx={{
          zIndex: "0",
          position: "absolute",
          top: { sm: "10px", xs: "-170px" },
          bottom: "0",
          left: { xs: "10px", sm: "-300px" },
        }}
      >
        <Perso width="95vw" />
      </Box>

      {/* Text */}
      <Box
        sx={{
          zIndex: "5",
          width: { xs: "10  0%", sm: "60%" },
          maxWidth: "800px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignSelf: { sm: "center", xs: "end" },
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
          Dr Kush
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
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum.At vero eos et accusamus et iusto
          odio dignissimos ducimus qui blanditiis praesentium voluptatum.At vero
          eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum."
        </Typography>
        <Button sx={{ my: "15px" }} variant="contained">
          Contained
        </Button>
        <Stack direction="row" spacing={2}>
          <Fb />
          <Twitter />
          <Linkedin />
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutPage;
