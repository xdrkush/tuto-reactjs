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

import FormUser from "./Form";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

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
        {Object.values(row).map((key, index) => (
          <TableCell key={index} align="left">
            {key}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <FormUser data={row} />
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableModule(props) {
  const { data } = props;
  // console.log("data", data, Object.keys(data[0]));
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
                    console.log('header table', key)
                    return (
                      <TableCell key={index} align="left">
                        {key}
                      </TableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 &&
                data.map((row, index) => <Row key={index} row={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
