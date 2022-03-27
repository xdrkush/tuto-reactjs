import { Box } from "@mui/system";
import { ReactComponent as Github } from "../../assets/images/Github.svg";
import { ReactComponent as Twitter } from "../../assets/images/Twitter.svg";
import { ReactComponent as Email } from "../../assets/images/Email.svg";

import TextField from "@mui/material/TextField";

// import "../../assets/css/svg.css";
import { Button, Typography } from "@mui/material";

const HeaderHome = (props) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "auto",
        width: "100vw",
        justifyContent: "center",
        pt: {xs: "50px", sm: "100px"},
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
      }}
    >
      {/* Text */}
      <Box
        sx={{
          maxWidth: {sm: "50%", xs: "100%"},
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          p: 2
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
          Contactez moi !
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
          Remplissez le formulaire pour m’envoyé un mail ou bien en utilisant
          mes coordonnées ci-dessous.
        </Typography>

        <Button sx={{ my: "15px", maxWidth: "150px" }} variant="contained">
          Contained
        </Button>

        <Box>
          <Box sx={{ display: "flex", my: "30px" }}>
            <Github />
            <Box sx={{ px: "15px" }}>
              <Typography
                className="title_header"
                variant="h4"
                sx={{
                  color: "primary",
                  zIndex: "5",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Github
              </Typography>
              <Typography
                className="title_header"
                variant="body"
                sx={{
                  zIndex: "5",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                xDrKush
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", my: "30px" }}>
            <Twitter />
            <Box sx={{ px: "15px" }}>
              <Typography
                className="title_header"
                variant="h4"
                sx={{
                  color: "primary",
                  zIndex: "5",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Twitter
              </Typography>
              <Typography
                className="title_header"
                variant="body"
                sx={{
                  zIndex: "5",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                @DrKush
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", my: "30px" }}>
            <Email />
            <Box sx={{ px: "15px" }}>
              <Typography
                className="title_header"
                variant="h4"
                sx={{
                  color: "primary",
                  zIndex: "5",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Email
              </Typography>
              <Typography
                className="title_header"
                variant="body"
                sx={{
                  zIndex: "5",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                Dr@Ku.sh
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Form */}
      <Box sx={{ display: "flex", justifyContent: "center", maxWidth: {sm: "50%", xs: "100%"} }}>
        <Box
          sx={{
            textAlign: "left",
            width: "100%",
            alignItems: "center",
            alignSelf: "center",
            p:2,
            backgroundColor: "#2F1F34",
          }}
        >
          <Box
            sx={{
              width: 500,
              my: "15px",
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Name"
              label="Name"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              my: "15px",
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Email"
              label="Email"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              my: "15px",
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Object"
              label="Objet"
              variant="standard"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              my: "15px",
              maxWidth: "100%",
            }}
          >
            <TextField
              fullWidth
              id="standard-basic"
              placeholder="Message"
              label="Message"
              variant="standard"
            />
          </Box>
          <Button sx={{ my: "15px", width: "100%" }} variant="contained">
            Contained
          </Button>
        </Box>
        <Box
          sx={{ textAlign: "left", width: "100%", alignSelf: "center" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HeaderHome;
