import { Box } from "@mui/system";
import {
  convertFromHTML,
  ContentState,
} from "draft-js";
import React, { useEffect } from "react";
import MUIEditor, {
  MUIEditorState,
  toHTML,
} from "../../config/react-mui17-draft-wysiwyg";

export default function EditorDefault(props) {
  const { data, handleData } = props;
  const editorConfig = {};
  const [html, setHtml] = React.useState(data);

  const mountEditorFromHTML = (value) => {
    // Convert HTML TO BLOCK for Editor
    const blocksFromHTML = convertFromHTML(value);
    const blockObj = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(MUIEditorState.createWithContent(editorConfig, blockObj));
  };

  // Convert HTML TO BLOCK for Editor
  const blocksFromHTML = convertFromHTML(html);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );

  const [editorState, setEditorState] = React.useState(
    MUIEditorState.createWithContent(editorConfig, state)
  );

  useEffect(() => {
    if (data !== html) mountEditorFromHTML(data);
    setHtml(data);
  }, [data]);

  // const convertToHTML = () => {
  //   const stateHtml = toHTML(editorState.getCurrentContent());
  //   setHtml(stateHtml);
  //   handleData(stateHtml);
  //   console.log("convertToHTML", stateHtml);
  // };

  // const save = () => {
  //   const rawContent = convertToRaw(editorState.getCurrentContent());
  //   // Here you can send the rawContent object to a server or whatever you want
  //   console.log("save", rawContent);
  //   alert("Saved");
  // };

  const onChange = (newState) => {
    const stateHtml = toHTML(editorState.getCurrentContent());
    setHtml(stateHtml);
    setEditorState(newState);
    handleData(stateHtml);
    console.log("onChange", stateHtml);
  };

  return (
    <>
      <MUIEditor
        autoFocus
        editorState={editorState}
        onChange={onChange}
        config={editorConfig}
      />
      {/* <button onClick={convertToHTML}>To HTML</button>
      <button onClick={save}>Save</button> */}
      <Box>{html}</Box>
    </>
  );
}
