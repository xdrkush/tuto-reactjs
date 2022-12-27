import { Box } from "@mui/system";
import { ReactComponent as Vue } from "../../assets/images/Vue.svg";
import { ReactComponent as ReactSvg } from "../../assets/images/React.svg";
import { ReactComponent as Node } from "../../assets/images/Node.svg";
import { ReactComponent as Mongo } from "../../assets/images/Mongo.svg";
import { ReactComponent as Macbook } from "../../assets/images/Macbook.svg";
// import "../../assets/css/svg.css";
import { Typography } from "@mui/material";

export default function HeaderHome(props) {
  return (
    <Box
      sx={{
        p: 2, pt: 5,
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
          maxWidth: "400px",
          margin: "auto",
          mb: "50px",
        }}
      >
        <Typography
          className="title_header"
          variant="h4"
          sx={{
            color: "primary",
            top: "100px",
            fontWeight: "bold",
          }}
        >
          Mes services
        </Typography>
        <Typography
          className="title_header"
          variant="body"
          sx={{
            zIndex: "5",
            fontSize: "16px",
          }}
        >
          Je peux vous assister dans vos projets avec la plupart des
          technologies modernes du web
        </Typography>
      </Box>

      {/* Box */}
      <Box sx={{ display: "flex" }}>
        {/* Left */}
        <Box
          sx={{
            width: "50%",
            zIndex: "5",
          }}
        >
          {/* Vue */}
          <Box
            sx={{
              maxWidth: "230px",
              textAlign: "left",
              p: 1,
            }}
          >
            <Box>
              <Vue />
            </Box>
            <Typography
              className="title_header"
              variant="h4"
              sx={{
                color: "primary",
                zIndex: "5",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Vue JS
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
              a book or other written or printed work, regarded in terms of its
              content rather than its physical form.
            </Typography>
          </Box>
          {/* Node */}
          <Box
            sx={{
              maxWidth: "230px",
              textAlign: "left",
              p: 1,
            }}
          >
            <Box>
              <Node />
            </Box>
            <Typography
              className="title_header"
              variant="h4"
              sx={{
                color: "primary",
                zIndex: "5",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Node JS
            </Typography>
            <Typography
              className="title_header"
              variant="body"
              sx={{
                zIndex: "5",
                fontSize: "14px",
                textAlign: "left",
                fontSize: "16px",
              }}
            >
              a book or other written or printed work, regarded in terms of its
              content rather than its physical form.
            </Typography>
          </Box>
        </Box>
        {/* Right */}
        <Box
          sx={{
            zIndex: "5",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {/* React */}
          <Box
            sx={{
              maxWidth: "230px",
              textAlign: "right",
              p: 1,
            }}
          >
            <Box>
              <ReactSvg />
            </Box>
            <Typography
              className="title_header"
              variant="h4"
              sx={{
                color: "primary",
                zIndex: "5",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              React JS
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
              a book or other written or printed work, regarded in terms of its
              content rather than its physical form.
            </Typography>
          </Box>
          {/* Mongo */}
          <Box
            sx={{
              maxWidth: "230px",
              textAlign: "right",
              p: 1,
            }}
          >
            <Box>
              <Mongo />
            </Box>
            <Typography
              className="title_header"
              variant="h4"
              sx={{
                color: "primary",
                zIndex: "5",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Mongo DB
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
              a book or other written or printed work, regarded in terms of its
              content rather than its physical form.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Svg */}
      <Box
        sx={{
          maxWidth: "100%",
          zIndex: "0",
          position: "absolute",
          top: "35%",
          bottom: "0",
          left: "0",
          right: "0",
          mx: "auto",
        }}
      >
        <Macbook width='95vw'/>
      </Box>
    </Box>
  );
}
