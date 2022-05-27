import { CInput } from "@coreui/react";
import React, { useState } from "react";
import EmployeeProfileForm from "./employeeProfileForm";
import EmployeeProfileResult from "./employeeProfileResult";

const EmployeeProfileIndex = () => {
  const [saveData, setSaveData] = useState([]);
  //input box
  const [empName, setEmpName] = useState("");
  const inputChange = (e) => {
    setEmpName(e.target.value);
  };
  // Department Data
  const [deptData, setDeptData] = useState([
    { id: 1, name: "IT Department" },
    { id: 2, name: "Sales Department" },
    { id: 3, name: "HR Department" },
    { id: 4, name: "Management" },
  ]);
  const [deptSelData, setDeptSelData] = useState("");
  const deptSelChange = (e) => {
    console.log("dept", e.target.value);
    setDeptSelData(e.target.value);
  };

  console.log(deptSelData);
  //Radio Data
  const radioData = [
    {
      id: "1",
      name: "Male",
    },
    {
      id: "2",
      name: "Female",
    },
  ];
  const [radioChk, setRadioChk] = useState([]);
  const [radioChkRsul, setRadioChkRsul] = useState([]);

  const radioChange = (id, name) => {
    setRadioChk(id);
    setRadioChkRsul(name);
  };

  // check box
  let [chkData, SetChkData] = useState([
    { id: "1", name: "React" },
    { id: "2", name: "PHP" },
    { id: "3", name: "Java" },
    { id: "4", name: "C#" },
  ]);

  let [chkValue, setCheckValue] = useState([]);
  let [chkResult, setCheckResult] = useState("");

  let [resultData, setResultData] = useState([]);

  let ResultNameArr = [];

  const chkChange = (e) => {
    let RestultArr = [];
    let value = e.target.value;
    let chked = e.target.checked;
    let chkedData = chkData.map((obj) =>
      obj.id === value ? { ...obj, is_checked: chked } : obj
    );
    SetChkData(chkedData);
    // console.log(chkedData);
    chkedData.filter((data) =>
      data.is_checked ? RestultArr.push(data.name) : ""
    );
    // for (let i = 0; i < chkedData.length; i++) {
    //   if (chkedData[i].is_checked == true) {
    //     RestultArr.push(chkedData[i]);
    //   }
    // }
    // setResultData(RestultArr);
    setResultData(RestultArr);
  };

  const btnClick = (e) => {
    let obj = [];
    obj["name"] = empName;
    obj["deptname"] = deptSelData;
    obj["gender"] = radioChkRsul;
    obj["skill"] = resultData;
    setSaveData(obj);
  };
  console.log(saveData);
  return (
    <>
      <EmployeeProfileForm
        empName={empName}
        inputChange={inputChange}
        deptData={deptData}
        deptSelChange={deptSelChange}
        radioData={radioData}
        radioChkRsul={radioChkRsul}
        radioChange={radioChange}
        chkData={chkData}
        chkValue={chkValue}
        chkResult={chkResult}
        chkChange={chkChange}
        resultData={resultData}
        btnClick={btnClick}
      />
      <hr />
      <EmployeeProfileResult />
    </>
  );
};

export default EmployeeProfileIndex;
