import React from "react";
import NavBar from "../NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <div className="containers">
        <h1>404</h1>
        <h4>Page not found</h4>
      </div>
    </>
  );
};

export default ErrorPage;
