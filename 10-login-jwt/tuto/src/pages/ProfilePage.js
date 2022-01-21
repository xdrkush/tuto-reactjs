import React from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import withAuth from "../components/login/withAuth";

const Profile = () => {
  const { name } = useParams();
  return (
    <MainLayout>
      <h1 className="title is-1">This is the Profile Page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
        <p>name: {name}</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
      </article>
    </MainLayout>
  );
};

export default withAuth(Profile);
