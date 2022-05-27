import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import { useLocation } from "react-router-dom";

const EmpDetial = () => {
  const location = useLocation();
  const [detailData, setDetailData] = useState([]);

  useEffect(() => {
    if (location.state != undefined) {
      setDetailData(location.state.data);
    }
  });

  return (
    <>
      <NavBar />
      <div>
        <h2>Employee Profile</h2>
        <hr></hr>
        <div className="infoBox">
          <p className="infoData">Username:</p>
          <p className="infoDataSpan">
            <span>{detailData.username}</span>
          </p>
        </div>
        <div className="infoBox">
          <p className="infoData">Fullname:</p>
          <p className="infoDataSpan">
            <span>{detailData.fullname}</span>
          </p>
        </div>

        <div className="infoBox">
          <p className="infoData">Email:</p>
          <p className="infoDataSpan">
            <span>{detailData.email}</span>
          </p>
        </div>

        <div className="infoBox">
          <p className="infoData">Phone No:</p>
          <p className="infoDataSpan">
            <span>{detailData.ph_no}</span>
          </p>
        </div>

        <div className="infoBox">
          <p className="infoData">Address:</p>
          <p className="infoDataSpan">
            <span>{detailData.address}</span>
          </p>
        </div>
        <hr />
      </div>
    </>
  );
};
export default EmpDetial;
