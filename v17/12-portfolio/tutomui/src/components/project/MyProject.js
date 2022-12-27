import { Box } from "@mui/system";
import "../../assets/css/gradient.css";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import image4 from "../../assets/images/image4.jpeg";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import clsx from "clsx";
import { makeStyles } from "@mui/styles";

import { Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    "&.root": {
      height: "290px",
      width: "100%",
      borderRadius: 5,
    },
    "& .child": {
      height: "290px",
      width: "100%",
    },
  },
});

const HeaderHome = (props) => {
  const classes = useStyles();
  const arrayImg = [
    { id: 1, img: image1, title: "Komodo" },
    { id: 2, img: image2, title: "Javascript" },
    { id: 3, img: image3, title: "React JS" },
    { id: 4, img: image4, title: "Vue JS" },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "auto",
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        flexDirection: {sm: 'row', xs: 'column'},
        p: 2
      }}
    >
      <Box
        sx={{
          maxWidth: {sm: "40%", xs: "100%"},
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          p: 1
        }}
      >
        <Typography
          className="title_header"
          variant="h4"
          sx={{
            color: "primary",
            zIndex: "5",
            fontWeight: "bold",
            fontSize: "35px",
          }}
        >
          Jettez un oeil à mes projets Copy
        </Typography>
        <Typography
          className="title_header"
          variant="body"
          sx={{
            zIndex: "5",
            fontSize: "18px",
            textAlign: "left",
          }}
        >
          L’ensemble de mes projets sont des projets de développement web
          disponible sur{" "}
          <span variant="body">
            {" "}
            <strong>Github</strong>{" "}
          </span>
          .
        </Typography>
        <Box
          sx={{ backgroundColor: "#1CD6C1", height: "7px", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          pt: "5%",
          justifyContent: "center",
          maxWidth: {sm: "60%", xs: "100%"},
          height: "80vh",
        }}
      >
        <ImageList cols={2} gap={10} sx={{ width: "600px", height: "600px" }}>
          {arrayImg.map((item, index) => (
            <ImageListItem key={item.img} cols={1} rows={1}>
              <Box
                className={clsx(classes.root, "root")}
                sx={{
                  pt: 30,
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%), url("${item.img}") rgba(0, 237, 211, 0.6)`,
                  backgroundBlendMode: "normal, multiply, normal",
                }}
              >
                {/* <img
                  className={clsx("child")}
                  src={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                /> */}

                <Typography
                  className="title_header"
                  variant="body"
                  sx={{
                    zIndex: "5",
                    top: '100px',
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  {`${index + 1}: ${item.title}`}
                </Typography>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default HeaderHome;
