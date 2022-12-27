import * as React from "react";
import Login from "../components/login/Login";
import Register from "../components/login/Register";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";

const LoginPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="1" />
            <Tab label="Register" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" index={0}>
          <Login />
        </TabPanel>
        <TabPanel value="2" index={1}>
          <Register />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default LoginPage;
