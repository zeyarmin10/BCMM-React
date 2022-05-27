import React, { useState } from "react";
import NavBar from "../navbar/navbar";

const Register = () => {
  const [header1, setHeader1] = useState();
  const btnClick = () => {
    setHeader1("Save Successfully");
    setTimeout(() => {}, 3000);
  };
  return (
    <>
      <NavBar />
      <h1>{header1}</h1>
      <div className="regContainer">
        <div className="col">
          <label className="labelName">Username :</label>
          <input className="labelInput" />
        </div>
        <div className="col">
          <label className="labelName">Full Name :</label>
          <input className="labelInput" />
        </div>
        <div className="col">
          <label className="labelName">Email :</label>
          <input className="labelInput" />
        </div>
        <div className="col">
          <label className="labelName">Phone No :</label>
          <input className="labelInput" />
        </div>
        <div className="col">
          <label className="labelName">Address :</label>
          <textarea className="labelTextarea"></textarea>
        </div>
        <div className="saveBtn">
          <button className="btnSave" onClick={btnClick}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};
export default Register;
