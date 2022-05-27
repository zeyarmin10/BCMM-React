import React, { useState } from "react";
import Add from "./result";
import Subs from "./subs";

function Calc() {
  const [firstInput, setFirstInput] = useState("");
  const [secInput, setSecInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [resultInput, setResultInput] = useState("");

  const [subsFirst, setSubsFirst] = useState("");
  const [subSec, setSubsSec] = useState("");
  const [substhird, setSubsthird] = useState("");
  const [subsResult, setSubsResult] = useState("");

  //   const [multifirst, setMultifirst] = useState("");
  //   const [multiSec, setMultiSec] = useState("");
  //   const [multiThird, setMultiThird] = useState("");
  //   const [multiResult, setMultiResult] = useState("");

  //   const [divFirst, setDivFirst] = useState("");
  //   const [divSec, setDivSec] = useState("");
  //   const [divthird, setDivthird] = useState("");
  //   const [divResult, setDivResult] = useState("");

  const firstChange = (e) => {
    const typein = /^[0-9\b]+$/;
    if (e.target.value === "" || typein.test(e.target.value)) {
      setFirstInput(e.target.value);
    }
  };
  const secChange = (e) => {
    setSecInput(e.target.value);
  };
  const thirdChange = (e) => {
    const typein = /^[0-9\b]+$/;
    if (e.target.value === "" || typein.test(e.target.value)) {
      setThirdInput(e.target.value);
    }
  };

  const isequalto = () => {
    let res = parseInt(firstInput) + parseInt(thirdInput);
    console.log(res);
    setResultInput(res);
  };

  const subfirstChange = (e) => {
    const typein = /^[0-9\b]+$/;
    if (e.target.value === "" || typein.test(e.target.value)) {
      setSubsFirst(e.target.value);
    }
  };
  const subsecChange = (e) => {
    setSubsSec(e.target.value);
  };
  const subthirdChange = (e) => {
    const typein = /^[0-9\b]+$/;
    if (e.target.value === "" || typein.test(e.target.value)) {
      setSubsthird(e.target.value);
    }
  };

  const subisequalto = () => {
    let res = parseInt(subsFirst) - parseInt(substhird);
    console.log(res);
    setSubsResult(res);
  };

  return (
    <>
      <h1>Calculation</h1>
      <div>
        <Add
          firstInput={firstInput}
          secInput={secInput}
          thirdInput={thirdInput}
          resultInput={resultInput}
          firstChange={firstChange}
          secChange={secChange}
          equalto={isequalto}
          thirdChange={thirdChange}
        />
        <Subs
          subsFirst={subsFirst}
          subSec={subSec}
          substhird={substhird}
          subsResult={subsResult}
          subfirstChange={subfirstChange}
          subthirdChange={subthirdChange}
          subisequalto={subisequalto}
        />
      </div>
    </>
  );
}

export default Calc;
