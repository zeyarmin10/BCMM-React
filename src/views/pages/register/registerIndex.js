import React, { useState } from "react";
import NavBar from "../navbar/navbar";
import axios from "axios";
import { CRow } from "@coreui/react";

const Register = (props) => {
  const [header1, setHeader1] = useState();
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhNo] = useState("");
  const [dept, setDept] = useState("");
  const [textarea, setTextarea] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [validErr, setValidErr] = useState("");
  const [databaseerr, setDatabaseErr] = useState("");
  let numberFormat = /[0-9]|\./;
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let lowerCaseFormat = /^[a-z]+$/;

  const [userNameWarn, setUserNameWarn] = useState("");
  const [fullNameWarn, setFullNameWarn] = useState("");
  const [emailWarn, setEmailWarn] = useState("");
  const [phoneWarn, setPhoneWarn] = useState("");
  const [deptWarn, setDeptWarn] = useState("");

  const btnClick = async (e) => {
    if (userName == "" || numberFormat.test(userName)) {
      setUserNameWarn("Enter Valid User Name!");
      setUserName("");
    } else {
      setUserName(userName);
      setUserNameWarn("");
    }
    if (fullName == "" || numberFormat.test(fullName)) {
      setFullNameWarn("Enter Valid Full Name");
      setFullName("");
    } else {
      setFullName(fullName);
      setFullNameWarn("");
    }
    if (dept == "") {
      setDeptWarn("Department cannot be null");
      setDept("");
    } else {
      setDept(dept);
      setDeptWarn("");
    }
    if (email == "") {
      setEmailWarn("Email cannot be null");
    } else if (!emailFormat.test(email)) {
      setEmailWarn("Enter Valid Email Address");
      setEmail("");
    } else {
      setEmail(email);
      setEmailWarn("");
    }
    if (phno == "") {
      setPhoneWarn("phone no cannot be null");
    } else if (!numberFormat.test(phno)) {
      setPhoneWarn("Only numbers Accept");
      setPhNo("");
    } else {
      setPhNo(phno);
      setPhoneWarn("");
    }
    let obj = {
      username: userName,
      fullname: fullName,
      email: email,
      ph_no: phno,
      department: dept,
      address: textarea,
    };
    try {
      const result = await axios.post(
        "http://localhost:4000/api/v1/employee/createEmployee",
        obj
      );
      console.log(result);
      if (result.data.status === 200) {
        setSuccessMsg("Saved Successufly ");
      } else if (result.data.status === 422) {
        setValidErr("validation error!");
      } else if (result.data.status === 500) {
        setDatabaseErr(result.data.message);
      } else {
        alert("something worng!");
      }
    } catch (error) {
      console.log("error");
    }
  };
  // setTimeout(() => {
  //   setHeader1("");
  // }, 3000);
  return (
    <>
      <NavBar />
      <div className="regContainer">
        <div className="col">
          <label className="labelName">Username :</label>
          <input
            className="labelInput"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {userNameWarn != "" && (
            <span
              className="warningText"
              style={{
                color: "red",
                paddingLeft: "0.5rem",
                fontSize: "1.5rem",
              }}
            >
              *
            </span>
          )}
        </div>
        <div className=" col">
          <label></label>
        </div>
        <div className="col">
          <label className="labelName">Full Name :</label>
          <input
            className="labelInput"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="labelName">Email :</label>
          <input
            className="labelInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="labelName">Phone No :</label>
          <input
            className="labelInput"
            value={phno}
            onChange={(e) => setPhNo(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="labelName">Department :</label>
          <input
            className="labelInput"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
        </div>
        <div className="col">
          <label className="labelName">Address :</label>
          <textarea
            className="labelTextarea"
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
          ></textarea>
        </div>
        <div className="saveBtn">
          <button className="btnSave" onClick={btnClick}>
            Save
          </button>
          <p>
            <label style={{ color: "green" }}>{header1}</label>
            {successMsg && (
              <label style={{ color: "green" }}> {successMsg}</label>
            )}
            {validErr && <label style={{ color: "green" }}> {validErr}</label>}
            {databaseerr && (
              <label style={{ color: "green" }}> {databaseerr}</label>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default Register;
