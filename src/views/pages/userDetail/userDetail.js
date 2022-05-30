import React, { useState, useEffect } from "react";
import NavBar from "../navbar/navbar";
import { useLocation } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    if (location.state != undefined) {
      setUserDetail(location.state.data);
    }
  });

  return (
    <>
      <NavBar />
      <div>
        <h2>Employee Profile</h2>
        <hr></hr>
        <div className="infoBox">
          <p className="infoData">ID:</p>
          <p className="infoDataSpan">
            <span>{userDetail.id}</span>
          </p>
        </div>
        <div className="infoBox">
          <p className="infoData">First Name:</p>
          <p className="infoDataSpan">
            <span>{userDetail.first_name}</span>
          </p>
        </div>

        <div className="infoBox">
          <p className="infoData">Last Name:</p>
          <p className="infoDataSpan">
            <span>{userDetail.last_name}</span>
          </p>
        </div>

        <div className="infoBox">
          <p className="infoData">Email :</p>
          <p className="infoDataSpan">
            <span>{userDetail.email}</span>
          </p>
        </div>

        <div className="infoBox">
          <p className="infoData">Avatar:</p>
          <p className="infoDataSpan">
            <img src={userDetail.avatar} />
          </p>
        </div>
        <hr />
      </div>
    </>
  );
};
export default UserDetail;
