import React, { useState } from "react";

const Subs = (props) => {
  return (
    <div className="Subs">
      <input
        className="inputCalc"
        type={"text"}
        value={props.subsFirst}
        onChange={props.subfirstChange}
      />
      <label
        className="inputCalc"
        onChange={props.secChange}
        className={"opsign"}
      >
        -
      </label>
      <input
        className="inputCalc"
        type={"text"}
        value={props.substhird}
        onChange={props.subthirdChange}
      />
      <button className="btnCalc" type="button" onClick={props.subisequalto}>
        =
      </button>
      <input className="inputCalc" type={"text"} value={props.subsResult} />
    </div>
  );
};

export default Subs;
