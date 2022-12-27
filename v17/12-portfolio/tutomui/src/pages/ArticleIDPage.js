import { Button, CardMedia, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { editArticle, getArticles } from "../store/actions/ArticlesActions";

import { useLocation, useNavigate } from "react-router-dom";
import Placeholder from "../assets/images/Placeholder.svg";
import Editor from "../components/admin/Editor";
import { useDispatch, useSelector } from "react-redux";

const ArticleIDPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [data, setData] = useState(state.article);
  const [form, setForm] = useState(state.article);
  const [isEdit, setIsEdit] = useState(false);

  const submitForm = () => {
    dispatch(editArticle(form));
    setTimeout(() => dispatch(getArticles()), 777);
  };

  const handleData = (value) => {
    setData({ ...data, description: value });
    setForm({ ...form, description: value });
  };

  // Change state Form
  const handleChange = (prop) => (event) => {
    // console.log("handleInput", prop, event.target.value);
    setForm({ ...form, [prop]: event.target.value });
    setData({ ...data, [prop]: event.target.value });
  };

  useEffect(() => {
    setData(state.article);
    setForm(state.article);
  }, [state]);

  useEffect(() => {
    if (!state) navigate(-1);
  }, [navigate, state]);

  return (
    <Box sx={{ p: 0, m: 0 }}>
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
          mt: 5,
          wordBreak: "break-all",
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
          {data && data.title}
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
        <Typography
          className="title_header"
          variant="h5"
          sx={{
            zIndex: "5",
            my: 2,
            fontSize: "22px",
          }}
        >
          {data && data.subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          my: 5,
          p: 2,
          display: "flex",
          flexDirection: "column",
          wordBreak: "break-all",
        }}
      >
        <Box>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </Box>
      </Box>
      {auth.isAdmin === true && (
        <Box
          sx={{
            my: 5,
            p: 2,
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
          }}
        >
          <Button
            onClick={() => setIsEdit(isEdit ? false : true)}
            variant="contained"
          >
            Edit
          </Button>
          {isEdit === true && (
            <Box sx={{ width: "100%" }}>
              <TextField
                sx={{ width: "30%", py: 2 }}
                value={form[`title`]}
                onChange={handleChange(`title`)}
                label={"Title"}
              />
              <TextField
                sx={{ width: "70%", py: 2 }}
                value={form[`subtitle`]}
                onChange={handleChange(`subtitle`)}
                label={"Subtitle"}
              />
              {/* Wysiwyg */}
              <Editor data={form.description} handleData={handleData} />
              <Button onClick={() => submitForm(form)} variant="contained">
                Submit
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ArticleIDPage;
