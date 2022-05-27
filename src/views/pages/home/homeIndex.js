import React from "react";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../navbar/navbar";
// import NavBar from "../navbar/navbar";

const Home = () => {
  //   const history = useHistory();
  //   const gotoProfile = () => {
  //     history.push("/profile", { name: "Zeyar Min" });
  //   };
  //   const gotoFruit = () => {
  //     history.push("/fruit");
  //   };
  return (
    <>
      {/* <div
        className="content"
        style={{
          display: "flex",

          alignItems: "center",
        }}
      >
      </div> */}
      {/* <NavBar /> */}
      <NavBar />
      <h1>Welcome Home!</h1>
      <h2>BAMAWL HR Integrated System</h2>
      <p>
        HR Integrated System, cloud services provided by Brycen Myanmar Co.,Ltd,
        is 3 in 1 system <br />1 Employee Management System <br />2 Employee
        Attendance System <br />3 Employee Salary Calculating System Like HR
        Assistant, this system can help you in management of Employee
        Information and Salary Calculation.
      </p>
      {/* <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to={{ pathname: "/profile", state: { name: "Zeyar Min" } }}>
          Go to Profile
        </Link>
        <Link to="/fruit">Go to Fruit</Link>
        <button className="profile-button" onClick={gotoProfile}>
          Go to Profile via button
        </button>
        <button className="profile-button" onClick={gotoFruit}>
          Go to Fruits Page via Button
        </button>
      </div> */}
    </>
  );
};
export default Home;
