import { Button, CardMedia, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getRepo } from "../store/actions/GithubActions";
import Link from "@mui/material/Link";
import ReactMarkdown from "react-markdown";

import { useLocation, useNavigate } from "react-router-dom";
import Placeholder from "../assets/images/Placeholder.svg";
import { useDispatch, useSelector } from "react-redux";

const ArticleIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(state.repo);
  const repo = useSelector((state) => state.github.repo);

  console.log("REPO", repo);

  useEffect(() => {
    setData(state.repo);
  }, [state]);

  useEffect(() => {
    dispatch(getRepo(state.repo));
  }, [state]);

  useEffect(() => {}, [window.location.href]);

  useEffect(() => {
    if (!state) navigate(-1);
  }, [navigate, state]);

  const LinkSource = () => {
    return (
      <Link href={data.html_url}>
        <Typography
          className="title_header"
          variant="body"
          sx={{
            textAlign: 'center',
            zIndex: "5",
            color: "#1CD6C1",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          {data && `> Source: ${data.html_url} <`}
        </Typography>
      </Link>
    );
  };

  return (
    <Box sx={{ p: 0, m: 0 }}>
      <Box
        sx={{
          textAlign: "center",
          minHeight: "auto",
          width: "100vw",
          maxWidth: "100vw",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={Placeholder}
          alt="green iguana"
        />
        <Box
          sx={{
            width: "100vw",
            textAlign: "center",
            mt: 2,
            wordBreak: "break-all",
            p: 1,
          }}
        >
          <Typography
            className="title_header"
            variant="h4"
            sx={{
              color: "primary",
              my: 2,
              zIndex: "5",
              fontWeight: "bold",
              fontSize: "38px",
            }}
          >
            {data && data.name}
          </Typography>
          <Box
            sx={{
              backgroundColor: "#1CD6C1",
              height: "4px",
              my: 5,
              m: "auto",
              width: "75px",
            }}
          />
          <LinkSource />
        </Box>
        {repo.length > 0 ? (
          <Box
            sx={{
              width: { sx: "100%", sm: "75vw" },
              textAlign: "left",
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mt: 2,
              wordBreak: "break-all",
              p: 1,
            }}
          >
            <Box>
              <ReactMarkdown>{repo}</ReactMarkdown>
            </Box>

            <LinkSource />
          </Box>
        ) : (
          <Box>
            <Typography
              className="title_header"
              variant="h5"
              sx={{
                zIndex: "5",
                my: 2,
                color: "white",
                maxWidth: "100%",
                fontWeight: "bold",
              }}
            >
              README.md Non Disponible (source en dessous)
            </Typography>

            <LinkSource />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ArticleIDPage;
