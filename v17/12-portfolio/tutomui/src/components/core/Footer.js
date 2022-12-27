import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";

import { ReactComponent as Fb } from "../../assets/images/Fb.svg";
import { ReactComponent as Twitter } from "../../assets/images/Twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/images/Linkedin.svg";
import { ReactComponent as Yt } from "../../assets/images/Yt.svg";
import { ReactComponent as Insta } from "../../assets/images/Insta.svg";

import Stack from "@mui/material/Stack";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        px: 2,
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          textAlign: 'center',
          my: 2,
          justifyContent: { md: "start", xs: "center" },
        }}
      >
        <Typography
          className="title_header"
          variant="h4"
          sx={{
            color: "#1CD6C1",
            zIndex: "5",
            fontWeight: "bold",
            fontSize: "38px",
          }}
        >
          <strong>KUSHOLIO</strong>
        </Typography>
        <Typography
          className="title_header"
          variant="body"
          sx={{
            zIndex: "5",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          Copyright © Dr Kush - Tous droits réservés
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          my: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
          }}
        >
          <Stack direction="row" spacing={2}>
            <Fb />
            <Twitter />
            <Linkedin />
            <Yt />
            <Insta />
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
          }}
        >
          {["Documentation", "À propos", "Projets", "Contact"].map(
            (txt, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Typography
                  className="title_header"
                  variant="body"
                  sx={{
                    zIndex: "5",
                    fontWeight: "bold",
                    fontSize: "10px",
                  }}
                >
                  {txt}
                </Typography>
                <Divider
                  sx={{ height: 28, m: 0.5, mt: "7px", color: "#ffffff" }}
                  orientation="vertical"
                />
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
