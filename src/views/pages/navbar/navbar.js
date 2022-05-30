import React, { Link } from "react";
import "./navStyle.css";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const homeClick = () => {
    history.push("/home");
  };
  const regClick = () => {
    history.push("/register");
  };
  const empClick = () => {
    history.push("/employeeList");
  };
  const userClick = () => {
    history.push("/userList");
  };
  const aboClick = () => {
    history.push("/aboutUs");
  };
  return (
    <>
      <nav className="navContainer">
        <ul>
          <li onClick={homeClick}>Home</li>
          <li onClick={regClick}>Register</li>
          <li onClick={empClick}>Employee List</li>
          <li onClick={userClick}>User List</li>
          <li onClick={aboClick}>About Us</li>
        </ul>
      </nav>
    </>
    // <div className="navBar">
    //   {/* <Link to="/home">Home</Link>
    //   <Link to="/register">Register</Link>
    //   <Link to="/employeeList">Employee List</Link>
    //   <Link to="/aboutUs">About Us</Link> */}
    // </div>
  );
};
export default NavBar;
