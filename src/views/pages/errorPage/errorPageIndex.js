import React from "react";
import NavBar from "../navbar/navbar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <h1 className="error">404</h1>
      <h1>Page Not Found</h1>
    </>
  );
};
export default ErrorPage;
