import React, { useState } from "react";

const EntryUserInfo = (props) => {
  return (
    <div>
      <div className="row input-container">
        <div className="col">
          <div className="row">
            <label><b>ID</b></label>
          </div>
          <div className="row">
            <input className="input" type={"text"} value={props.idNo} onChange={props.idChange}></input>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <label><b>NAME</b></label>
          </div>
          <div className="row">
            <input className="input" type={"text"} value={props.name} onChange={props.nameChange}></input>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <label><b>EMAIL</b></label>
          </div>
          <div className="row">
            <input className="input" type={"text"} value={props.email} onChange={props.emailChange}></input>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <label><b>PHONE</b></label>
          </div>
          <div className="row">
            <input className="input" type={"text"} value={props.phone} onChange={props.phoneChange}></input>
          </div>
        </div>
      </div>
      <div className="row btn-add">
        <button className="add-btn-css" onClick={props.addbtn}>ADD</button>
      </div>
    </div>
  );
};

export default EntryUserInfo;
