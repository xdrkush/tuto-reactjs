import { Button, CardMedia, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getRepo } from "../store/actions/GithubActions";
import Link from "@mui/material/Link";

import { useLocation, useNavigate } from "react-router-dom";
import Placeholder from "../assets/images/Placeholder.svg";
import { useDispatch, useSelector } from "react-redux";

const ArticleIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState(state.repo);
  const repo = useSelector((state) => state.github.repo);

  useEffect(() => {
    setData(state.repo);
  }, [state]);

  useEffect(() => {
    getRepo(state.repo);
  }, [window.location.href]);

  useEffect(() => {
    if (!state) navigate(-1);
  }, [navigate, state]);

  console.log("Article GH ID", data, repo);

  return (
    <Box>
      <CardMedia
        component="img"
        height="300"
        image={Placeholder}
        alt="green iguana"
      />
      <Box sx={{ width: "100%", textAlign: "center", mt: 5 }}>
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
        <Link href={data.html_url}>
          <Typography
            className="title_header"
            variant="h5"
            sx={{
              zIndex: "5",
              my: 2,
              color: 'white'
            }}
          >
            {data && data.html_url}
          </Typography>
        </Link>
      </Box>

      {/* <Box sx={{ my: 5, p: 2, display: "flex", flexDirection: "column" }}>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </Box>
      </Box> */}
      {/* {auth.isAdmin === true && (
        <Box sx={{ my: 5, p: 2, display: "flex", flexDirection: 'row-reverse', width: '100%'}}>
          <Button onClick={() => setIsEdit((isEdit) ? false : true)} variant="contained">Edit</Button>
          {isEdit === true && (
            <Box sx={{ width: '100%'}}>
              <TextField
                sx={{width: '30%', py: 2}}
                value={form[`title`]}
                onChange={handleChange(`title`)}
                label={"Title"}
              />
              <TextField
                sx={{width: '70%', py: 2}}
                value={form[`subtitle`]}
                onChange={handleChange(`subtitle`)}
                label={"Subtitle"}
              />
              <Editor data={form.description} handleData={handleData} />
              <Button onClick={() => submitForm(form)} variant="contained">Submit</Button>
            </Box>
          )}
        </Box>
      )} */}
    </Box>
  );
};

export default ArticleIDPage;
