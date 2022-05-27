import React, { useState } from "react";
import RadioBtns from "./radioBtns";

const RadioIndex = () => {
  let radioData = [
    {
      id: "1",
      name: "Car",
    },
    {
      id: "2",
      name: "Bicycle",
    },
    {
      id: "3",
      name: "Train",
    },
    {
      id: "4",
      name: "Aeroplane",
    },
  ];

  const [radioChk, setRadioChk] = useState([]);
  const [radioChkRsul, setRadioChkRsul] = useState([]);

  const radioChange = (id, name) => {
    setRadioChk(id);
    setRadioChkRsul(name);
  };

  return (
    <div>
      <RadioBtns
        radioData={radioData}
        radioChk={radioChk}
        radioChkRsul={radioChkRsul}
        radioChange={radioChange}
      />
    </div>
  );
};

export default RadioIndex;
