import React, { useState } from "react";
import "./style.css";
function Add(props) {
  return (
    <div>
      <input
        type={"text"}
        className="inputCalc"
        value={props.firstInput}
        onChange={props.firstChange}
      />
      <label
        value={props.secInput}
        onChange={props.secChange}
        className={"opsign"}
      >
        +
      </label>
      <input
        type={"text"}
        className="inputCalc"
        value={props.thirdInput}
        onChange={props.thirdChange}
      />
      <button type="button" className="btnCalc" onClick={props.equalto}>
        =
      </button>
      <input type={"text"} className="inputCalc" value={props.resultInput} />
    </div>
  );
}

export default Add;
