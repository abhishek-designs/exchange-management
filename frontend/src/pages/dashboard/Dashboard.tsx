import React from "react";
import Header from "../../components/layouts/header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>This is dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
