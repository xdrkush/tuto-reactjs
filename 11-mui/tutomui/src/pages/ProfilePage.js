import React from "react";
import { useParams } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import CardUser from "../components/profile/CardUsers";

import MainLayout from "../layouts/MainLayout";
import withAuth from "../components/login/withAuth";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { state } = useLocation();
  const user = useSelector((state) => state.login.user);

  console.log("ProfilePage", user);

  return (
    <MainLayout>
      <Box>
        <CardUser user={state} />
      </Box>
    </MainLayout>
  );
};

export default withAuth(ProfilePage);
