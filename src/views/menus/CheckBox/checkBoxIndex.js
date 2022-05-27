import React, { useState } from "react";
import CheckBoxChild from "./checkBoxChild";

const CheckBoxIndex = () => {
  let [chkData, SetChkData] = useState([
    { id: "1", name: "React" },
    { id: "2", name: "PHP" },
    { id: "3", name: "Java" },
    { id: "4", name: "C#" },
    { id: "5", name: "Python" },
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

  return (
    <div>
      <CheckBoxChild
        chkData={chkData}
        chkValue={chkValue}
        chkResult={chkResult}
        chkChange={chkChange}
        resultData={resultData}
      />
    </div>
  );
};

export default CheckBoxIndex;
