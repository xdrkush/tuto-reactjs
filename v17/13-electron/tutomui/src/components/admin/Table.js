import React from "react";
import { Grid } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

import Form from "./Form";
import {
  deleteCategory,
  getCategory,
} from "../../store/actions/CategoryActions";
import {
  deleteArticle,
  getArticles,
} from "../../store/actions/ArticlesActions";
import { useDispatch } from "react-redux";

function Row(props) {
  const { row, str } = props;
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id, str) => {
    // console.log("submit", str, id);
    switch (str) {
      case "articles":
        // console.log("create", str, id);
        dispatch(deleteArticle(id));
        setTimeout(() => dispatch(getArticles()), 777);
        break;
      case "users":
        // console.log("create", str, id);
        break;
      case "category":
        // console.log("create", str, id);
        dispatch(deleteCategory(id));
        setTimeout(() => dispatch(getCategory()), 777);
        break;
      default:
        // console.log("error submit");
        break;
    }
  };

  const TableCellChips = (props) => {
    const { val } = props;
    return (
      <TableCell align="left">
        <Chip
          label={val === true ? "true" : "false"}
          color={val === true ? "success" : "primary"}
        />
      </TableCell>
    );
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {Object.entries(row).map((arr, index) => {
          const key = arr[0],
            val = arr[1];
          {
            /* console.log("col", arr, key); */
          }
          if (key === "_id") return;
          if (key === "articles_id")
            return (
              <TableCell key={index} align="left">
                {row.articles_id.length}
              </TableCell>
            );
          else if (key === "category_id")
            return (
              <TableCell key={index} align="left">
                {row.category_id && row.category_id.name}
              </TableCell>
            );
          else if (key === "isVerified")
            return <TableCellChips key={index} val={row.isVerified} />;
          else if (key === "isAdmin")
            return <TableCellChips key={index} val={row.isAdmin} />;
          else if (key === "isBan")
            return <TableCellChips key={index} val={row.isBan} />;
          else
            return (
              <TableCell key={index} align="left">
                {arr[1]}
              </TableCell>
            );
        })}
        <TableCell align="left">
          <Stack direction="row" spacing={1}>
            <Chip
              label="delete"
              onDelete={(e) => handleDelete(row._id, str)}
              deleteIcon={<DeleteIcon />}
              color="secondary"
              variant="outlined"
            />
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Form data={row} str={str} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableModule(props) {
  const { data, str } = props;
  // console.log("data", data, Object.keys(data));
  return (
    <Grid container columns={16}>
      <Grid item xs={16}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                {data[0] &&
                  Object.keys(data[0]).map((key, index) => {
                    {
                      /* console.log("header table", key); */
                    }
                    {
                      /* if (key === "author_id") return; */
                    }
                    if (key === "_id") return;
                    if (key === "__v") return;
                    return (
                      <TableCell key={index} align="left">
                        {key}
                      </TableCell>
                    );
                  })}
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 &&
                data.map((row, index) => (
                  <Row key={index} row={row} str={str} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
